import * as React from "react"
import { useIntl, Link } from "gatsby-plugin-intl"
import Layout from "../components/Layout"
import Video from "../components/Video"
import { Seo } from "../components/Seo"


const VideoPage = () => {
    const intl = useIntl()

    let ending = <div className="space-y-4"><p>Looking for Ceremonial Music? Go on the <Link to="/ceremonial-music" className="underline text-blue-700">Ceremonial Music page</Link> or find more videos made by NBNR on our <a href="https://www.youtube.com/channel/UC9X4dG-fBwQ0fzSIoD063bw/videos" className="underline text-blue-700">Youtube</a> page.</p></div>;

    if (intl.locale === "fr") {
        ending = <div className="space-y-4"><p>Vous cherchez la musique de cérémonie ? Allez sur l'onglet <Link to="/ceremonial-music" className="underline text-blue-700">musique de cérémonie</Link> ou allez sur notre page <a href="https://www.youtube.com/channel/UC9X4dG-fBwQ0fzSIoD063bw/videos" className="underline text-blue-700">Youtube</a> pour trouverez d'autres vidéos réalisées par la MNRN.</p></div>;
    }
    return (

    <div>
        <Layout pageTitle="Videos" description="Recordings and other videos of NBNR.">
            <div className="grid md:grid-cols-2 grid-col-1 gap-4 place-content-center mb-8">
                <Video linkId="aq4UVWGHEl0" title={{"en": "Maple Leaf Forever", "fr": "Maple Leaf Forever"}} description={{"en" : 'The National Band of the Naval Reserve presents Alexander Muir\'s "The Maple Leaf Forever".', "fr" : "La Musique nationale de la Réserve navale interprète la pièce « The Maple Leaf Forever » de Alexander Muir."}} />
                <Video linkId="AuK4C8Isv4w" title={{"en": "Marching Upon the Seas", "fr": "Marching Upon the Seas"}} description={{"en" : '"Marching Upon the Seas" is the Naval Reserve Centennial March by Sailor 3rd Class Tarek Aaron Bouhennache of HMCS DONNACONA."', "fr" : "« Marching Upon the Seas » est la marche du centenaire de la Réserve navale, composée par le matelot de 3e classe Tarek Aaron Bouhennache du NCSM DONNACONA."}} />
                <Video linkId="kg6oX0n0NFI" title={{"en": "Five Foot Two, Eyes of Blue (Has Anybody Seen My Girl?)", "fr": "Five Foot Two, Eyes of Blue (Has Anybody Seen My Girl?)"}} description={{"en":'The National Band of the Naval Reserve presents "Five Foot Two, Eyes of Blue" by Ray Henderson.', "fr":"La Musique nationale de la Réserve navale vous présente « Five Foot Two, Eyes of Blue » de Ray Henderson."}}/>
                <Video linkId="ggJv9toWdUI" title={{"en": "Nightfall in Camp", "fr": "Nightfall in Camp"}} description={{"en" : "The National Band of the Naval Reserve presents the traditional piece “Nightfall in Camp” in honour of Remembrance Day 2022. This piece combines “The Last Post” and the hymn “Unto the Hills”. This piece was recorded live during our summer 2022 concert in Calgary, AB.", "fr" : "La Musique nationale de la Réserve navale présente la pièce traditionnelle « Nightfall in Camp », en l'honneur du jour du Souvenir 2022. Cette pièce combine « The Last Post » et l'hymne « Unto the Hills ». Cette pièce a été enregistrée en direct lors de notre concert de l'été 2022 à Calgary, AB."}} />
                <Video linkId="HrFHISfk81I" title={{"en": "Cantina Band", "fr": "Cantina Band"}} description={{"en" : "NBNR presents “Cantina Band” by John Williams (aka “Mad About Me” by Figran D’an and the Modal Nodes) for Star Wars Day, May 4th 2022.", "fr" : "La MNRN présente « Cantina Band » de John Williams (alias « Mad About Me » de Figran D'an and the Modal Nodes) pour la Journée Star Wars, le 4 mai 2022."}} />
                <Video linkId="XLyFOpfheas" title={{"en": "Under the Sea", "fr": "Sous l'océan"}} description={{"en" : "For World Ocean Day 2022, NBNR presents “Under the Sea,” by Alan Menken and Howard Ashman, from the film “The Little Mermaid.”", "fr" : "Pour la Journée mondiale de l’océan 2022, la MNRN vous présente « Sous l’océan », d’Alan Menken et Howard Ashman, tiré du film « La petite sirène »."}} />
                <Video linkId="5seBM8XAu5U" title={{"en": "Cowgirl" , "fr": "Cowgirl"}} description={{"en" : "The National Band of the Naval Reserve joins award-winning Canadian country band Nice Horse on their track “Cowgirl” for a collaboration in 2020.", "fr" : "En 2020, la Musique nationale de la Réserve navale s’est jointe au groupe country canadien primé Nice Horse pour une collaboration musicale sur leur pièce « Cowgirl »."}} />
                <Video linkId="WuXncjoM_2k" title={{"en" : "Fanfare for the Common Man", "fr" : "Fanfare for the Common Man"}} description={{"en" : "NBNR presents Aaron Copland’s standard “Fanfare for the Common Man.”", "fr" : "La MNRN vous présente le classique, « Fanfare for the Common Man », d’Aaron Copland."}} />
                <Video linkId="oUnNRuYYsDs" title={{"en" : "Libertango", "fr" : "Libertango"}} description={{"en" : "NBNR’s flute ensemble presents Astor Piazzolla’s nuevo tango piece, “Libertango.”", "fr" : "L’ensemble de flutes de la MNRN interprète la pièce de tango nuevo « Libertango » d’Astor Piazzolla."}}/>
                <Video linkId="r-ygKKxYcWU" title={{"en" : "Meet the Bands!", "fr" : "Rencontrez les Musiques!"}} description={{"en" : "Check out what life is like as a musician in Canada’s Naval Reserve! Meet the bands and find out if a life of adventure, travel, and playing music is for you. ", "fr" : "Découvrez ce qu’est la vie d’un musicien dans la Réserve navale du Canada ! Rencontrez les Musiques et découvrez si une vie d’aventure, de voyages et de musique est faite pour vous."}} />
            </div>
            {ending}
            
        </Layout>
    </div>
        
    )
}

export default VideoPage

export const Head = () => (
    <Seo title="Videos" description="Recordings and other videos of NBNR."/>
)