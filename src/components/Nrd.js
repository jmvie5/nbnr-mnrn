import * as React from 'react'
import { useIntl } from "gatsby-plugin-intl"

const Nrd = ({ name, street, city, telephone, recruitingPhone, email }) => {
    //All params are strings
    const intl = useIntl()
    const emailLink = "mailto:" + email
    const mapLink = 'https://www.google.ca/maps/search/' + street + " " + city;


    return (
        <div className='flex flex-col  space-y-2'>
            <h1 className='font-bold text-xl'><intl.formatMessage id="HMCS"/> {name}</h1>
            <a className="text-blue-800 underline" href={mapLink}>
                <p>{street}</p>
                <p>{city}</p>
            </a>
            <div>
                <p><intl.formatMessage id="Telephone"/>: {telephone}</p>
                <p><intl.formatMessage id="Recruiting"/>: {recruitingPhone}</p>
                <p className='break-words'><intl.formatMessage id="Email"/>: <a href={emailLink} className='underline text-blue-700'>{email}</a></p>
            </div>
            
        </div>
    )
}

export default Nrd