import * as React from "react"
import Layout from "../components/Layout"
import { Seo } from "../components/Seo"
import NewsItem from "../components/NewsItem"

import image2 from "../../gallery/Ship-2.webp"


const IndexPage = () => {
    return (
<div className={`bg-fixed bg-center bg-cover`} style={{backgroundImage: `url(${image2})`}}>
    <Layout pageTitle=" " description="Welcome to NBNR's website, check out our photo gallery, recordings, upcoming concerts and employment opportunities.">
        <div className="mx-12 my-24 flex grid lg:grid-cols-4 sm:grid-cols-2 grid-col-1 gap-4 place-content-center">
            
        </div>
    </Layout>
</div>
    
        
    )
}

export default IndexPage

export const Head = () => (
    <Seo />
)