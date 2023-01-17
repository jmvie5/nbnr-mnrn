import * as React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { useIntl } from "gatsby-plugin-intl"
import { SEO } from "../components/seo"

const AboutPage = () => {
    const intl = useIntl()

    return (

        <Layout pageTitle="About" description="The National Band of the Naval Reserve (NBNR), formed in 1976, is comprised of Reservist musicians chosen from the six Naval Reserve Division bands across Canada.">
            <div className="flex gap-16 mb-8">
                <div className="text-left space-y-4">
                    <StaticImage alt="NBNR Logo" src="../images/logo.jpg" className="float-right ml-8 max-w-[40%]"/>
                    <intl.formatMessage id="About p1"/>
                    <ul className="list-disc pl-8">
                        <li><intl.formatMessage id="TECUMSEH"/></li>
                        <li><intl.formatMessage id="CHIPPAWA"/></li>
                        <li><intl.formatMessage id="STAR"/></li>
                        <li><intl.formatMessage id="YORK"/></li>
                        <li><intl.formatMessage id="DONNACONA"/></li>
                        <li><intl.formatMessage id="MONTCALM"/></li>
                    </ul>
                    <p><intl.formatMessage id="About p2" /></p>
                    <p><intl.formatMessage id="About p3" /></p>
                </div>
            </div>
            <div className="flex flex-col gap-4 text-justify">
                <h1 className="font-bold text-lg"><intl.formatMessage id="Events" /></h1>
                <p><intl.formatMessage id="About Events" /></p>
                <h1 className="font-bold mt-4 text-lg"><intl.formatMessage id="Ensembles" /></h1>
                <p><intl.formatMessage id="About Ensembles" /></p>
                <p>
                    <strong className="font-semibold text-lg"><intl.formatMessage id="Concert Band" /></strong><intl.formatMessage id="About Concert Band" />
                </p>
                <p>
                    <strong className="font-semibold text-lg"><intl.formatMessage id="Parade Band" /></strong><intl.formatMessage id="About Parade Band" />
                </p>
                <p>
                    <strong className="font-semibold text-lg"><intl.formatMessage id="Jazz Ensemble" /></strong><intl.formatMessage id="About Jazz Ensemble" />
                </p>
                <p>
                    <strong className="font-semibold text-lg"><intl.formatMessage id="Flute Ensemble" /></strong><intl.formatMessage id="About Flute Ensemble" />
                </p>
                <p>
                    <strong className="font-semibold text-lg"><intl.formatMessage id="Woodwind Ensemble" /></strong><intl.formatMessage id="About Woodwind Ensemble" />
                </p>
                <p>
                    <strong className="font-semibold text-lg"><intl.formatMessage id="Brass Ensemble" /></strong><intl.formatMessage id="About Brass Ensemble" />
                </p>
                <p>
                    <strong className="font-semibold text-lg"><intl.formatMessage id="Percussion Section" /></strong><intl.formatMessage id="About Percussion Section" />
                </p>
            </div>
        </Layout>
        
    )
}

export default AboutPage

export const Head = () => (
        <SEO title="About" description="The National Band of the Naval Reserve (NBNR), formed in 1976, is comprised of Reservist musicians chosen from the six Naval Reserve Division bands across Canada."/>
)