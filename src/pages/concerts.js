import * as React from "react"
import Layout from "../components/Layout"
import Concert from "../components/Concert"
import { Seo } from "../components/Seo"

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
        title: {en: "Test date", fr: "Date test"},
        dateParams: [1900, 3, 13],
        address: "NCSM Montcalm",
        time: 0,
        ensemble: "Jazz Ensemble",
        ticketsLink: "free"
    },
    { 
        title: {en:"Battle of the Atlantic Gala Dinner", fr:"Le diner gala de la Bataille de l'Atlantique"},
        dateParams: [2023, 4, 3],
        address: "Canadian War Museum, 1 Vimy Place, Ottawa, ON",
        time: "18:00",
        ensemble: "Concert Band",
        ticketsLink: "https://nac-o.wildapricot.org/2023-BOA-Gala"
    },
    {
        title: {en:"Canadian Tulip Festival", fr:"Festival canadien des tulipes"},
        dateParams: [2023, 4, 13],
        address: "Queen Elizabeth drive, Ottawa",
        time: "11:00",
        ensemble: "Parade Band",
        ticketsLink: "free"
    },
    {
        title: {en:"Quebec Naval Museum Centennial Mural Unveiling", fr:"Dévoilement de la fresque du centenaire du Musée naval de Québec"},
        dateParams: [2023, 5, 16],
        address: "170 Rue Dalhousie, Québec, QC G1K 8M7",
        time: 0,
        ensemble: "Concert Band",
        ticketsLink: "free"
    },
    {
        title: {en:"Royal Nova Scotia International Tattoo", fr: "Tattoo royal international de Nouvelle-Écosse"},
        dateParams: [2023, 5, 30],
        address: "Scotiabank Centre Halifax",
        time: "19:00",
        ensemble: "Concert Band",
        ticketsLink: "https://nstattoo.ca/tickets/2023-tattoo-tickets/"
    },
    {
        title: {en:"Royal Nova Scotia International Tattoo", fr: "Tattoo royal international de Nouvelle-Écosse"},
        dateParams: [2023, 6, 1],
        address: "Scotiabank Centre Halifax",
        time: "14:00",
        ensemble: "Concert Band",
        ticketsLink: "https://nstattoo.ca/tickets/2023-tattoo-tickets/"
    },
    {
        title: {en:"Royal Nova Scotia International Tattoo", fr: "Tattoo royal international de Nouvelle-Écosse"},
        dateParams: [2023, 6, 2],
        address: "Scotiabank Centre Halifax",
        time: "14:00",
        ensemble: "Concert Band",
        ticketsLink: "https://nstattoo.ca/tickets/2023-tattoo-tickets/"
    },
    {
        title: {en:"Royal Nova Scotia International Tattoo", fr: "Tattoo royal international de Nouvelle-Écosse"},
        dateParams: [2023, 6, 2],
        address: "Scotiabank Centre Halifax",
        time: "19:00",
        ensemble: "Concert Band",
        ticketsLink: "https://nstattoo.ca/tickets/2023-tattoo-tickets/"
    },
    {
        title: {en:"Royal Nova Scotia International Tattoo", fr: "Tattoo royal international de Nouvelle-Écosse"},
        dateParams: [2023, 6, 3],
        address: "1800 Argyle St, Halifax, NS B3J 2V9",
        time: "14:00",
        ensemble: "Concert Band",
        ticketsLink: "https://nstattoo.ca/tickets/2023-tattoo-tickets/"
    },
    {
        title: {en:"Calgary Stampede Parade", fr: "Parade du Stampede de Calgary"},
        dateParams: [2023, 6, 7],
        address: "Calgary Stampede, 1410 Olympic Way SE, Calgary, AB T2G 2W1",
        time: 0,
        ensemble: "Concert Band",
        ticketsLink: "https://www.calgarystampede.com/stampede/tickets"
    },

]

const ConcertsPage = () => {
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
            </Layout>
        </div>
        
    )
}

export default ConcertsPage

export const Head = () => (
    <Seo title="Concerts" description="NBRN upcoming concerts."/>
)
