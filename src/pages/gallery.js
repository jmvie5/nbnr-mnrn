import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import { Seo } from "../components/Seo"


/*
Code for static image on Google drive:
<img src="https://drive.google.com/uc?id=12XGpm3tQUO0p9XNtlP4r9aW9EWcEZ4Zb" alt="NBNR in Montreal's St Patrick parade"/>
*/

const GalleryPage = ( {data} ) => {

    return (
        <Layout pageTitle="Gallery" description="NBNRN photo gallery.">
            <div className="relative">
                <div class="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-12 place-content-center z-0">
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
    allFile(filter: {extension: {regex: "/(webp)/"}, dir: {regex: "/gallery/"}}) {
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

export const Head = () => (
    <Seo title="Gallery" description="NBNRN photo gallery."/>
)