import * as React from "react"
import Layout from "../components/Layout"
import Concert from "../components/Concert"
import { useIntl } from "gatsby-plugin-intl"

const ConcertsPage = () => {
    const intl = useIntl();

    return (

        <div>
            <Layout pageTitle="Concerts" description="NBRN upcoming concerts.">
                <intl.formatMessage id="No Concert"/>
                <div className="justify-center flex flex-col space-y-4 divide-y-2 divide-gray-800">
                    
                </div>
            </Layout>
        </div>
        
    )
}

export default ConcertsPage
