import * as React from 'react'

const Video = ({ linkId, title, description }) => {

    const link = "https://www.youtube.com/embed/" + linkId

    return (
        <div className="flex flex-col justify-between p-4 gap-2">
            <h1 className="font-bold">{title}</h1>
            <iframe src={link} title={title} allowFullScreen="allowfullscreen" frameBorder="0" 
                className='aspect-video w-full'/>
            <p className="text-base">{description}</p>
        </div>
    )
}

export default Video