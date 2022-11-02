import * as React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../../components/Layout"
import { useIntl } from "gatsby-plugin-intl"


/*Code for static image on Google drive:
<img src="https://drive.google.com/uc?id=12XGpm3tQUO0p9XNtlP4r9aW9EWcEZ4Zb" alt="NBNR in Montreal's St Patrick parade"/>

Code for accessing mdx files using {mdx.slug}.js
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

query :
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
    }
*/

const GalleryPage = ( {data} ) => {
    const intl = useIntl();

    function makeFullScreen(){
        return 
    }

    return (
        <Layout pageTitle="Gallery">
            <div className="relative">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-12 place-content-center z-0">
                    {data.allFile.edges.map(edge => {
                        let img = getImage(edge.node.childImageSharp.gatsbyImageData);
                    return <GatsbyImage className="transition duration-300 ease-in-out hover:scale-105" image={img}/>
                    })}
                </div>
            </div>
            
                
        </Layout>
    )
}

export const query = graphql`
query {
    allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)|(webp)/"}, dir: {regex: "/gallery/gallery/"}}) {
        edges {
            node {
                id
                childImageSharp {
                    gatsbyImageData
                }
            }
        }
    }
}`

export default GalleryPage