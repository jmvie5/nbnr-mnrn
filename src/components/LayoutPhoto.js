import * as React from 'react'

import BackgroundSlider from 'react-background-slider'
import Layout from './Layout'
import image1 from "../images/NBNR_StPat_2018.jpg"
import image2 from "../images/NBNR_FierteMTL_2018.jpg"
import image3 from "../images/NBNR_FierteMTL_2019.jpg"


const LayoutPhoto = ({ pageTitle, children }) => {


    return (
        <Layout pageTitle={pageTitle}>
            <BackgroundSlider
                images={[image1, image2, image3]}
                duration={10} transition={2}
                />
            {children}
        </Layout>
    )
}

export default LayoutPhoto

