import * as React from 'react'

const Concert = ({ date, title, adress, time, ensemble, ticketsLink }) => {
    //All params are strings

    const mapLink = 'https://www.google.ca/maps/search/' + adress;
    
    let tickets = "TICKETS";
    let isFree = false;
    if (ticketsLink === "free") {
        tickets = "FREE"
        isFree = true;
    }

    return (
        <div className="flex justify-between p-8">
            <div>
                <h1 className="font-bold">{date}</h1>
                <h2>{title} @{time}</h2>
                <a href={mapLink} className="text-base text-blue-800 underline">{adress}</a>
                <p className="text-sm">Ensemble : {ensemble}</p>
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