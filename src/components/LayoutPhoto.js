import * as React from 'react'

import Layout from './Layout'

import image2 from "../../gallery/Ship-2.webp"
/*
import image1 from "../../gallery/MarchingBand-2.webp"

import image3 from "../../gallery/NBNR_FierteMTL_2019.webp"
import image4 from "../../gallery/NBNR_StPat_2018.webp"
import image5 from "../../gallery/Ship-1.webp"
import image6 from "../../gallery/Stampede-2.webp"
*/

const LayoutPhoto = ({ pageTitle, children }) => {

    return (
            <div className={`bg-center bg-cover`} style={{backgroundImage: `url(${image2})`}}>
                <Layout pageTitle={pageTitle} >{children}</Layout>
            </div>
    )
}

export default LayoutPhoto

