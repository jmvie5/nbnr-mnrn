import * as React from "react"
import Layout from "../components/Layout"
import { Seo } from "../components/Seo"
import HomeLinks from "../components/HomeLinks"
import { UserGroupIcon, MusicalNoteIcon, InformationCircleIcon, FilmIcon, SparklesIcon, PhotoIcon } from '@heroicons/react/24/outline'

import image2 from "../../gallery/Ship-2.webp"

const IndexPage = () => {
    return (
<div className={`sm:bg-fixed bg-center bg-cover scroll-smooth overflow-auto touch-auto -z-10 w-full h-full fixed block top-0 left-0 bg-no-repeat`} style={{backgroundImage: `url(${image2})`}}>
    <Layout pageTitle=" " description="Welcome to NBNR's website, check out our photo gallery, recordings, upcoming concerts and employment opportunities.">
        <div className="mx-12 my-24 flex grid lg:grid-cols-4 sm:grid-cols-2 grid-col-1 gap-4 place-content-center z-10">
            <HomeLinks title={{"en" : "About us", "fr" : "À propos de nous"}} link="/about"><InformationCircleIcon className="h-12 w-12" aria-hidden="true"/></HomeLinks>
            <HomeLinks title={{"en" : "Photo Gallery", "fr" : "Galerie photos"}} link="/gallery"><PhotoIcon className="h-12 w-12" aria-hidden="true"/></HomeLinks>
            <HomeLinks title={{"en" : "Videos made by NBNR", "fr" : "Vidéos réalisées par la MNRN"}} link="/videos"><FilmIcon className="h-12 w-12" aria-hidden="true"/></HomeLinks>
            <HomeLinks title={{"en" : "Ceremonial Music recorded by NBNR", "fr" : "Musique de cérémonie enregistrée par la MNRN"}} link="/ceremonial-music"><MusicalNoteIcon className="h-12 w-12" aria-hidden="true"/></HomeLinks>
            <HomeLinks title={{"en" : "Upcoming concerts", "fr" : "Concerts à venir"}} link="/concerts"><SparklesIcon className="h-12 w-12" aria-hidden="true"/></HomeLinks>
            <HomeLinks title={{"en" : "Looking for a job?", "fr" : "À la recherche d'un emploi?"}} link="/jobs"><UserGroupIcon className="h-12 w-12" aria-hidden="true"/></HomeLinks>
            
        </div>
    </Layout>
</div>
    
        
    )
}

export default IndexPage

export const Head = () => (
    <Seo />
)