import * as React from "react"
import Layout from "../components/Layout"
import Concert from "../components/Concert"
import { Seo } from "../components/Seo"
import { useIntl } from "gatsby-plugin-intl"

/*Params for Concert {
        title = {en:"", fr:""},
        dateParams = [int year, int month, int day], month start at 0,
        address = "",
        time = "00:00" or 0 if none,
        ensemble = str in {Concert Band, Parade Band, Jazz Ensemble, Flute Ensemble, Woodwind Ensemble, Brass Ensemble, Percussion Section},
        ticketsLink = str url or "free"
*/
const concertList = [
    {
        title: {en:"Celebrating 100 years of the Naval Reserve in Canada", fr: "Célébration des 100 ans de la Réserve navale au Canada"},
        dateParams: [2023, 7, 4],
        address: "Holy Heart Theatre St. John's, NL",
        time: "19:00",
        ensemble: "Concert Band",
        ticketsLink: "free"
    },

]

const ConcertsPage = () => {
    const intl = useIntl()

    return (

        <div>
            <Layout pageTitle="Concerts" description="NBRN upcoming concerts.">
                <div className="justify-center flex flex-col space-y-4 divide-y-2 divide-gray-800">
                    {concertList.map(concert => {
                        var concertDate = new Date(concert.dateParams[0], concert.dateParams[1], concert.dateParams[2])
                        var dateNow = new Date()
                        
                        if (concertDate >= dateNow) {
                            return <Concert data={concert}/>
                        }
                        return null
                    })}
                </div>
                <intl.formatMessage id="No Concert" />
                
            </Layout>
        </div>
        
    )
}

export default ConcertsPage

export const Head = () => (
    <Seo title="Concerts" description="NBRN upcoming concerts."/>
)
