import * as React from 'react'
import { useIntl } from 'gatsby-plugin-intl'

const Video = ({ linkId, title, description }) => {
    //linlId = string
    //title and description = {en, fr}
    const intl = useIntl()
    const link = "https://www.youtube.com/embed/" + linkId

    return (
        <div className="flex flex-col justify-between p-4 gap-2">
            <h1 className="font-bold text-xl">{title[intl.locale]}</h1>
            <iframe src={link} title={title} allowFullScreen="allowfullscreen" frameBorder="0" 
                className='aspect-video w-full'/>
            <p className="">{description[intl.locale]}</p>
        </div>
    )
}

export default Video