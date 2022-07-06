import * as React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"

const AboutPage = () => {
    return (

        <Layout pageTitle="About">
            <div className="flex gap-16">
                <div className="basis-2/3 text-justify space-y-4">
                    <p>
                        The National Band of the Naval Reserve (NBNR), 
                        formed in 1976, is comprised of Reservist musicians 
                        chosen from the six Naval Reserve Division bands across Canada :
                    </p>
                    <ul className="list-disc pl-8">
                        <li>HMCS TECUMSEH in Calgary, Alberta;</li>
                        <li>HMCS CHIPPAWA in Winnepeg, Manitoba;</li>
                        <li>HMCS STAR in Hamilton, Ontario;</li>
                        <li>HMCS YORK in Toronto, Ontario; </li>
                        <li>HMCS DONNACONA in Montreal, Quebec;</li>
                        <li>HMCS MONTCALM in Québec, Quebec</li>
                    </ul>
                    <p>
                        Members of NBNR are selected by the officer in charge, Lieutenant-Commander Alexandrea Kovacs, 
                        based on their professionalism, dedication, and musical expertise. 
                        NBNR performs in various ensemble formats, including parade band, concert band, 
                        jazz band, and woodwind and brass ensembles. 
                        NBNR has enjoyed collaborations with many organizations and bands from around the world, 
                        including Chile, Germany, the United Kingdom, Australia, 
                        the United States of America, and the Netherlands.
                    </p>
                    <p>
                        NBNR trains and performs primarily during the summer months in support of the Naval Reserve’s 
                        mission to represent the Canadian Armed Forces and to connect with Canadians. 
                        From May to August, NBNR tours across Canada, providing musical support to civilian events, 
                        such as the Calgary Stampede and Grey Cup parade, and military parades and ceremonies, 
                        including visiting foreign dignitaries and changes of command. 
                        As NBNR’s musicians are selected from six smaller bands, 
                        the band is flexible and agile to support various operations throughout the year. 
                        During the training year at their home units, musicians travel to join NBNR 
                        for in-person specific training opportunities and events across Canada and internationally. 
                        Naval Reserve musicians can also hone their trade skills with NBNR’s virtual training offerings.
                    </p>
                </div>
                <div className="basis-1/3">
                    <StaticImage 
                    alt="Picture of NBNR"
                    src="../images/logo.jpg"/>
                </div>
            </div>

        </Layout>
        
    )
}

export default AboutPage