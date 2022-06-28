import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../../components/Layout"

const GalleryPage = ( {data} ) => {
    return (
        <Layout pageTitle="Gallery">
                {
                    data.allMdx.nodes.map(node => (
                        <div>
                        <article key={node.id}>
                            <h2>
                                <Link to={`/gallery/${node.slug}`}>
                                    {node.frontmatter.title}
                                </Link>
                            </h2>
                        </article>
                        </div>
                    ))
                }
        </Layout>
    )
}

export const query = graphql`
    query {
        allMdx {
            nodes {
                frontmatter {
                    title
                }
                id
                slug
            }
        }
    }`

export default GalleryPage