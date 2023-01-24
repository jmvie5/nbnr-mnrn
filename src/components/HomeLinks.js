import * as React from 'react'
import { useIntl, Link } from 'gatsby-plugin-intl'

const HomeLinks = ({ title, children, link }) => {
    //title and description = {en, fr}
    //link = Gatsby page link
    const intl = useIntl()

    return (
        <Link to={link} className="flex p-4 gap-2 max-w-xs max-h-80 border rounded-xl border-sky-800 drop-shadow-2xl bg-sky-800/90 overflow-auto break-words shadow-md shadow-sky-800/70 place-items-center">
            <div className='basis-1/4'>{children}</div>
            <h1 className="font-bold text-xl">{title[intl.locale]}</h1>
            
        </Link>
    )
}

export default HomeLinks