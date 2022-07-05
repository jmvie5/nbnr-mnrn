import * as React from "react"
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../../components/Layout"

const GalleryPost = ( {data} ) => {
    
    const image = getImage(data.mdx.frontmatter.index_image)
    
    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <MDXRenderer>
                {data.mdx.body}
            </MDXRenderer>
            <GatsbyImage
                image={image}
                alt={data.mdx.frontmatter.index_image_alt}
            />
        </Layout>

    )
}

export const query = graphql`
    query ($id: String) {
        mdx(id: {eq: $id}) {
            body
            frontmatter {
                title
                index_image_alt
                index_image_credit_link
                index_image_credit_text
                index_image {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
        }
    }
`
export default GalleryPost