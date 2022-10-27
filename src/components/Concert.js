import * as React from 'react'
import { useIntl } from "gatsby-plugin-intl"

const Concert = ({ dateParams, title, adress, time, ensemble, ticketsLink }) => {
    //dateParams = [year, month, day]
    //title = {en, fr}
    //All other params are strings

    const intl = useIntl()

    const mapLink = 'https://www.google.ca/maps/search/' + adress;

    const date = new Date(dateParams[0], dateParams[1], dateParams[2])
    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    let lang = "en-EN";
    

    if (intl.locale === "fr") {
        lang = "fr-FR";
    }

    let tickets;
    let isFree;

    if (ticketsLink === "free") {
        tickets = <intl.formatMessage id="FREE"/>;
        isFree = true;
    } else {
        tickets = <intl.formatMessage id="TICKETS"/>;
        isFree = false;
    }

    return (
        <div className="flex justify-between p-8">
            <div>
                <h1 className="font-bold">{date.toLocaleDateString(lang, options)}</h1>
                <h2>{title[intl.locale]} @{time}</h2>
                <a href={mapLink} className="text-base text-blue-800 underline">{adress}</a>
                <p className="text-sm"><intl.formatMessage id="Ensemble" /> : <intl.formatMessage id={ensemble} /></p>
            </div>
            <div className="self-center">
                {isFree
                ? <p className="border-2 border-sky-800 p-2 text-sky-800 hover:bg-sky-800 hover:text-sky-100">{tickets}</p>
                : <a href={ticketsLink} className="border-2 border-sky-800 p-2 text-sky-800 hover:bg-sky-800 hover:text-sky-100">{tickets}</a>
                }
            </div>
            
        </div>
    )
}

export default Concert