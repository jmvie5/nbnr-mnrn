import * as React from "react"
import LayoutPhoto from "../components/LayoutPhoto"
import { SEO } from "../components/seo"


const IndexPage = () => {
    return (

    <LayoutPhoto pageTitle=" " description="Welcome to NBNR's website, check out our photo gallery, recordings, upcoming concerts and employment opportunities.">
        <div className="py-28"></div>
    </LayoutPhoto>
        
    )
}

export default IndexPage

export const Head = () => (
    <SEO />
)