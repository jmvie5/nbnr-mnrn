import * as React from "react"
import Layout from "../components/Layout"
import Concert from "../components/Concert"
import { useIntl } from "gatsby-plugin-intl"

const ConcertsPage = () => {
    const intl = useIntl();

    return (

        <div>
            <Layout pageTitle="Concerts">
                <intl.formatMessage id="Concert time zones"/>
                <div className="justify-center flex flex-col space-y-4 divide-y-2 divide-gray-800">
                    <Concert dateParams={[2022, 7, 1]} title={{"en":"Heavy Horse Show", "fr":"Spectacle de chevaux lourds"}} time="15:00" adress="Calgary Stampede" ensemble="Jazz Combo" ticketsLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ"/>
                    <Concert dateParams={[2022, 7, 13]} title={{"en":"St. Albert Air Show", "fr":"Spectacle aérien de St. Albert"}} time="13:00" adress="Edmonton" ensemble="Concert Band" ticketsLink="free"/>
                    <Concert dateParams={[2022, 7, 18]} title={{"en":"Windsor National Dieppe Raid Memorial", "fr":"Mémorial national du raid sur Dieppe à Windsor"}} time="18:00" adress="Windsor" ensemble="Concert Band" ticketsLink="free"/>
                </div>
            </Layout>
        </div>
        
    )
}

export default ConcertsPage
