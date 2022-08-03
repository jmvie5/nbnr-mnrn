import * as React from 'react'

const Nrd = ({ name, street, city, telephone, recruitingPhone, email }) => {
    //All params are strings

    const emailLink = "mailto:" + email
    const mapLink = 'https://www.google.ca/maps/search/' + street + " " + city;


    return (
        <div className='flex flex-col  space-y-2'>
            <h1 className='font-bold'>{name}</h1>
            <a className="text-blue-800 underline" href={mapLink}>
                <p>{street}</p>
                <p>{city}</p>
            </a>
            <div>
                <p>Telephone: {telephone}</p>
                <p>Recruiting: {recruitingPhone}</p>
                <p>Email: <a href={emailLink} className='underline text-blue-700'>{email}</a></p>
            </div>
            
        </div>
    )
}

export default Nrd