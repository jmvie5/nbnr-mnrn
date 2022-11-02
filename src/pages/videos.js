import * as React from "react"
import { useIntl } from "gatsby-plugin-intl"
import Layout from "../components/Layout"
import Video from "../components/Video"


const VideoPage = () => {
    const intl = useIntl()

    let ending = <div className="space-y-4"><p>Find more videos made by NBNR on our <a href="https://www.youtube.com/channel/UC9X4dG-fBwQ0fzSIoD063bw/videos" className="underline text-blue-700">Youtube</a> page.</p></div>;

    if (intl.locale === "fr") {
        ending = <div className="space-y-4"><p>Vous trouverez d'autres vidéos réalisées par la MNRN sur notre page <a href="https://www.youtube.com/channel/UC9X4dG-fBwQ0fzSIoD063bw/videos" className="underline text-blue-700">Youtube</a>.</p></div>;
    }
    return (

    <div>
        <Layout pageTitle="Videos">
            <div className="flex grid md:grid-cols-2 grid-col-1 gap-4 place-content-center mb-8">
                <Video linkId="r-ygKKxYcWU" title={{"en" : "Meet the Bands!", "fr" : "Rencontrez les Musiques!"}} description={{"en" : "Check out what life is like as a musician in Canada’s Naval Reserve! Meet the bands and find out if a life of adventure, travel, and playing music is for you. ", "fr" : "Découvrez ce qu’est la vie d’un musicien dans la Réserve navale du Canada ! Rencontrez les Musiques et découvrez si une vie d’aventure, de voyages et de musique est faite pour vous."}} />
                <Video linkId="HrFHISfk81I" title={{"en": "Cantina Band", "fr": "Cantina Band"}} description={{"en" : "NBNR presents “Cantina Band” by John Williams (aka “Mad About Me” by Figran D’an and the Modal Nodes) for Star Wars Day, May 4th 2022.", "fr" : "La MNRN présente « Cantina Band » de John Williams (alias « Mad About Me » de Figran D'an and the Modal Nodes) pour la Journée Star Wars, le 4 mai 2022."}} />
                <Video linkId="XLyFOpfheas" title={{"en": "Under the Sea", "fr": "Sous l'océan"}} description={{"en" : "For World Ocean Day 2022, NBNR presents “Under the Sea,” by Alan Menken and Howard Ashman, from the film “The Little Mermaid.”", "fr" : "Pour la Journée mondiale de l’océan 2022, la MNRN vous présente « Sous l’océan », d’Alan Menken et Howard Ashman, tiré du film « La petite sirène »."}} />
                <Video linkId="5seBM8XAu5U" title={{"en": "Cowgirl" , "fr": "Cowgirl"}} description={{"en" : "The National Band of the Naval Reserve joins award-winning Canadian country band Nice Horse on their track “Cowgirl” for a collaboration in 2020.", "fr" : "En 2020, la Musique nationale de la Réserve navale s’est jointe au groupe country canadien primé Nice Horse pour une collaboration musicale sur leur pièce « Cowgirl »."}} />
                <Video linkId="WuXncjoM_2k" title={{"en" : "Fanfare for the Common Man", "fr" : "Fanfare for the Common Man"}} description={{"en" : "NBNR presents Aaron Copland’s standard “Fanfare for the Common Man.”", "fr" : "La MNRN vous présente le classique, « Fanfare for the Common Man », d’Aaron Copland."}} />
                <Video linkId="oUnNRuYYsDs" title={{"en" : "Libertango", "fr" : "Libertango"}} description={{"en" : "NBNR’s flute ensemble presents Astor Piazzollo’s nuevo tango piece, “Libertango.”", "fr" : "L’ensemble de flutes de la MNRN interprète la pièce de tango nuevo « Libertango » d’Astor Piazzollo."}}/>
            </div>
            {ending}
            
        </Layout>
    </div>
        
    )
}

export default VideoPage
