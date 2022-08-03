import * as React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../../components/Layout"

const GalleryPage = ( {data} ) => {

    return (
        <Layout pageTitle="Gallery">
            <div class="grid grid-cols-2 gap-4 place-content-center">
                {
                    data.allMdx.nodes.map(node => (
                        <div className="border-sky-800 aspect-auto max-h-96">
                            <Link to={`/gallery/${node.slug}`}>
                                <div className="flex flex-col justify-items-center h-full gap-2">
                                    <h1 className="place-self-center">{node.frontmatter.title}</h1>
                                    <GatsbyImage
                                    image={getImage(node.frontmatter.index_image)}
                                    alt={node.frontmatter.index_image_alt} 
                                    className="h-full rounded-lg shadow-2xl shadow-sky-300/50 -z-10"
                                    />
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
                
        </Layout>
    )
}

export const query = graphql`
    query {
        allMdx {
            nodes {
                frontmatter {
                    title
                    index_image {
                        childImageSharp {
                            gatsbyImageData
                        }
                    }
                    index_image_alt
                }
                id
                slug
            }
        }
    }`

export default GalleryPage