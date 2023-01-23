import * as React from 'react'
import { useIntl } from 'gatsby-plugin-intl'
import { Link } from 'gatsby'

const NewsItem = ({ title, description, link }) => {
    //title and description = {en, fr}
    //link = Gatsby page link
    const intl = useIntl()

    return (
        <Link to={link} className="flex flex-col p-4 gap-2 max-w-xs max-h-80 border rounded-xl border-sky-800 drop-shadow-2xl bg-sky-800/90 overflow-auto break-words shadow-md shadow-sky-800/70">
            <h1 className="font-bold text-xl">{title[intl.locale]}</h1>
            <p className="">{description[intl.locale]}</p>
        </Link>
    )
}

export default NewsItem