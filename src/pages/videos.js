import * as React from "react"
import Layout from "../components/Layout"
import Video from "../components/Video"


const VideoPage = () => {

    return (

    <div>
        <Layout pageTitle="Videos">
            <div className="flex grid md:grid-cols-2 grid-col-1 gap-4 place-content-center">
                <Video linkId="HrFHISfk81I" title={{"en": "Cantina Band", "fr": "Cantina Band"}} description={{"en" : "NBNR presents “Cantina Band” by John Williams (aka “Mad About Me” by Figran D’an and the Modal Nodes) for Star Wars Day, May 4th 2022.", "fr" : "La MNRN présente « Cantina Band » de John Williams (alias « Mad About Me » de Figran D'an and the Modal Nodes) pour la Journée Star Wars, le 4 mai 2022."}} />
                <Video linkId="XLyFOpfheas" title={{"en": "Under the Sea", "fr": "Sous l'océan"}} description={{"en" : "For World Ocean Day 2022, NBNR presents “Under the Sea,” by Alan Menken and Howard Ashman, from the film “The Little Mermaid.”", "fr" : "Pour la Journée mondiale de l’océan 2022, la MNRN vous présente « Sous l’océan », d’Alan Menken et Howard Ashman, tiré du film « La petite sirène »."}} />
                <Video linkId="5seBM8XAu5U" title={{"en": "Cowgirl" , "fr": "Cowgirl"}} description={{"en" : "The National Band of the Naval Reserve joins award-winning Canadian country band Nice Horse on their track “Cowgirl” for a collaboration in 2020.", "fr" : "En 2020, la Musique nationale de la Réserve navale s’est jointe au groupe country canadien primé Nice Horse pour une collaboration musicale sur leur pièce « Cowgirl »."}} />
                
            </div>
            
        </Layout>
    </div>
        
    )
}

export default VideoPage
