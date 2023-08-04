import * as React from "react"
import { useIntl, Link } from "gatsby-plugin-intl"
import Layout from "../components/Layout"
import Video from "../components/Video"
import { Seo } from "../components/Seo"


const CeremonialPage = () => {
    const intl = useIntl()

    let ending = <div className="space-y-4"><p>Find more videos made by NBNR on the our <Link to="/videos" className="underline text-blue-700">video page</Link> or on our <a href="https://www.youtube.com/channel/UC9X4dG-fBwQ0fzSIoD063bw/videos" className="underline text-blue-700">Youtube</a> page.</p></div>;

    if (intl.locale === "fr") {
        ending = <div className="space-y-4"><p>Vous trouverez d'autres vidéos réalisées par la MNRN dans l'onglet <Link to="/videos" className="underline text-blue-700">vidéos</Link> ou sur notre page <a href="https://www.youtube.com/channel/UC9X4dG-fBwQ0fzSIoD063bw/videos" className="underline text-blue-700">Youtube</a>.</p></div>;
    }
    
    return (

    <div>
        <Layout pageTitle="Ceremonial Music" description="Recordings of ceremonial music made by NBNR.">
            <div className="grid md:grid-cols-2 grid-col-1 gap-4 place-content-center mb-8">
                <Video linkId="IXJbh-C0xps" title={{"en" : "O Canada", "fr" : "Ô Canada"}} description={{"en" : 'The National Band of the Naval Reserve presents the Canadian national anthem, "O Canada"!', "fr" : "La Musique nationale de la Réserve navale présente l'hymne national canadien, « Ô Canada » !"}} />
                
                <Video linkId="2kOZ9igydOE" title={{"en" : "God Save the King", "fr" : "Dieu protège le Roi"}} description={{"en" : 'The National Band of the Naval Reserve presents "God Save the King!"', "fr" : " La Musique nationale de la Réserve navale présente « Dieu protège le Roi » !"}} />

                <Video linkId="sFun724J3xE" title={{"en" : "Eternal Father (Naval Hymn)", "fr" : "Eternal Father (Hymne naval)"}} description={{"en" : 'The National Band of the Naval Reserve presents the Naval Hymn, "Eternal Father".', "fr" : " La Musique nationale de la Réserve navale présente l'hymne naval, « Eternal Father »."}} />

                <Video linkId="KOhCKUo3H4I" title={{"en" : 'The Standard of St. George', "fr" : 'The Standard of St. George'}} description={{"en" : 'The National Band of the Naval Reserve presents "The Standard of St. George"!', "fr" : "La Musique nationale de la Réserve navale présente « The Standard of St. George » !"}} />

                <Video linkId="iiLay-3Gq4I" title={{"en" : 'Naval Salute', "fr" : 'Salut naval'}} description={{"en" : 'The National Band of the Naval Reserve presents the Naval Salute!', "fr" : "La Musique nationale de la Réserve navale présente le Salut naval !"}} />

                <Video linkId="2VzODdH0-68" title={{"en" : 'General Salute', "fr" : 'Salut général'}} description={{"en" : 'The National Band of the Naval Reserve presents the General Salute!', "fr" : "La Musique nationale de la Réserve navale présente le Salut général !"}} />

                <Video linkId="ffK8UTIz_54" title={{"en" : 'Last Post & Naval Reveille', "fr" : 'Dernier appel & Réveil naval'}} description={{"en" : 'The National Band of the Naval Reserve presents the Last Post and the Naval Reveille. There is a minute of silence that begins at 1:29.', "fr" : "La Musique nationale de la Réserve navale présente le Dernier appel et le Réveil naval. Il y a une minute de silence qui commence à 1:29."}} />

                <Video linkId="AqUCouqeeHY" title={{"en" : 'Last Post & Rouse', "fr" : 'Dernier appel & Réveil'}} description={{"en" : 'The National Band of the Naval Reserve presents the Last Post and Rouse. There is a minute of silence that begins at 1:29.', "fr" : "La Musique nationale de la Réserve navale présente le Dernier appel et Réveil. Il y a une minute de silence qui commence à 1:29."}} />

                <Video linkId="MWZOG-GmC3E" title={{"en" : 'Sunset', "fr" : 'Coucher du soleil'}} description={{"en" : 'The Sunset Ceremony is a combination of three ceremonies: the ancient ceremony of Beating Retreat, Tattoo, and lowering of the national flag. The Navy Sunset signifies the ending of the day with the lowering of the Royal Canadian Naval Ensign on Her Majesty\'s Canadian Ships.', "fr" : "La cérémonie du coucher du soleil est une combinaison de trois cérémonies: l'ancienne cérémonie de battement de la retraite, le Tattoo, et la rentrée des couleurs du pavillon nationale. Le coucher du soleil de la Marine signifie la fin de la journée avec la rentrée des couleurs du pavillon naval canadien à bord des navires canadiens de Sa Majesté."}} />

                <Video linkId="gMZvJBO_7uc" title={{"en" : 'Heart of Oak', "fr" : 'Heart of Oak'}} description={{"en" : 'The National Band of the Naval Reserve presents the Royal Canadian Navy march, "Heart of Oak"!', "fr" : "La Musique nationale de la Réserve navale présente la marche de la Marine royale canadienne, « Heart of Oak » !"}} />
                <Video linkId="2IAskVKkt4k" title={{"en" : 'Heart of Oak Parade Version (1 Repeat)', "fr" : 'Heart of Oak, version de parade (1 répétition)'}} description={{"en" : 'The National Band of the Naval Reserve presents "Heart of Oak"! This version has been specially mastered for use in parades or drill practice.  It was designed to sound clear in a drill hall and the bass drum has been amplified to assist with marching.', "fr" : "La Musique nationale de la Réserve navale présente la marche de la Marine royale canadienne, « Heart of Oak » ! Cette version a été spécialement conçue pour être utilisée lors de parades ou d’exercices militaires. Elle a été conçue pour avoir un son clair sur un pont de parade et la grosse caisse a été amplifiée pour faciliter la marche."}} />
                <Video linkId="rBsTsxtS3wY" title={{"en" : 'Heart of Oak Parade Version (3 Repeats)', "fr" : 'Heart of Oak, version de parade (3 répétitions)'}} description={{"en" : 'The National Band of the Naval Reserve presents "Heart of Oak" with three repeats! This version has been specially mastered for use in parades or drill practice. It was designed to sound clear in a drill hall and the bass drum has been amplified to assist with marching.', "fr" : "La Musique nationale de la Réserve navale présente « Heart of Oak » avec trois répétitions! Cette version a été spécialement conçue pour être utilisée lors de parades ou d’exercices militaires. Elle a été conçue pour avoir un son clair sur un pont de parade et la grosse caisse a été amplifiée pour faciliter la marche. "}} />

                <Video linkId="Q4n6C0PNwgo" title={{"en" : 'Scipio', "fr" : 'Scipio'}} description={{"en" : 'The National Band of the Naval Reserve presents "Scipio"!', "fr" : "La Musique nationale de la Réserve navale présente « Scipio » !"}} />
                <Video linkId="OqftL3aXNtU" title={{"en" : 'Scipio (Parade Version)', "fr" : 'Scipio (Version de parade)'}} description={{"en" : 'The National Band of the Naval Reserve presents "Scipio"! This version has been specially mastered for use in parades or drill practice. It was designed to sound clear in a drill hall and the bass drum has been amplified to assist with marching.', "fr" : "La Musique nationale de la Réserve navale présente « Scipio » ! Cette version a été spécialement conçue pour être utilisée lors de parades ou d’exercices militaires. Elle a été conçue pour avoir un son clair sur un pont de parade et la grosse caisse a été amplifiée pour faciliter la marche."}} />
                
                <Video linkId="tceAtMlXowY" title={{"en" : 'RCAF March Past', "fr" : 'RCAF March Past'}} description={{"en" : 'The National Band of the Naval Reserve presents the Royal Canadian Air Force (RCAF) March Past!', "fr" : "La Musique nationale de la Réserve navale présente le défilé de l’Aviation royale canadienne !"}} />
                <Video linkId="T6uaSiI3scg" title={{"en" : 'RCAF March Past (Parade Version)', "fr" : 'RCAF March Past (Version de parade)'}} description={{"en" : 'The National Band of the Naval Reserve presents "RCAF March Past"! This version has been specially mastered for use in parades or drill practice. It was designed to sound clear in a drill hall and the bass drum has been amplified to assist with marching.', "fr" : "La Musique nationale de la Réserve navale présente « RCAF March Past » ! Cette version a été spécialement conçue pour être utilisée lors de parades ou d’exercices militaires. Elle a été conçue pour avoir un son clair sur un pont de parade et la grosse caisse a été amplifiée pour faciliter la marche."}} />

                <Video linkId="E8mGUUm6KWI" title={{"en" : 'Navy Medley', "fr" : 'Navy Medley'}} description={{"en" : 'The National Band of the Naval Reserve presents "Navy Medley"!', "fr" : "La Musique nationale de la Réserve navale présente « Navy Medley » !"}} />
                <Video linkId="8BsMTz6EX8o" title={{"en" : 'Navy Medley (Parade Version)', "fr" : 'Navy Medley (Version de parade)'}} description={{"en" : 'The National Band of the Naval Reserve presents "Navy Medley"! This version has been specially mastered for use in parades or drill practice. It was designed to sound clear in a drill hall and the bass drum has been amplified to assist with marching.', "fr" : "La Musique nationale de la Réserve navale présente « Navy Medley » ! Cette version a été spécialement conçue pour être utilisée lors de parades ou d’exercices militaires. Elle a été conçue pour avoir un son clair sur un pont de parade et la grosse caisse a été amplifiée pour faciliter la marche."}} />

                <Video linkId="pmp7RdSXhIc" title={{"en" : 'Invercargill', "fr" : 'Invercargill'}} description={{"en" : 'The National Band of the Naval Reserve presents "Invercargill"!', "fr" : "La Musique nationale de la Réserve navale présente « Invercargill » !"}} />
                <Video linkId="DLwab30Y8Ws" title={{"en" : 'Invercargill (Parade Version)', "fr" : 'Invercargill (Version de parade)'}} description={{"en" : 'The National Band of the Naval Reserve presents "Invercargill"! This version has been specially mastered for use in parades or drill practice. It was designed to sound clear in a drill hall and the bass drum has been amplified to assist with marching.', "fr" : "La Musique nationale de la Réserve navale présente « Invercargill » ! Cette version a été spécialement conçue pour être utilisée lors de parades ou d’exercices militaires. Elle a été conçue pour avoir un son clair sur un pont de parade et la grosse caisse a été amplifiée pour faciliter la marche."}} />

                <Video linkId="G20lnSmkfrk" title={{"en" : 'The Great Little Army', "fr" : 'The Great Little Army'}} description={{"en" : 'The National Band of the Naval Reserve presents the march of the Canadian Army, "The Great Little Army"!', "fr" : "La Musique nationale de la Réserve navale présente la marche de l'Armée canadienne, « The Great Little Army » !"}} />
                <Video linkId="C0wqm7XzcOw" title={{"en" : 'The Great Little Army (Parade Version)', "fr" : 'The Great Little Army (Version de parade)'}} description={{"en" : 'The National Band of the Naval Reserve presents "The Great Little Army"! This version has been specially mastered for use in parades or drill practice. It was designed to sound clear in a drill hall and the bass drum has been amplified to assist with marching.', "fr" : "La Musique nationale de la Réserve navale présente « The Great Little Army » ! Cette version a été spécialement conçue pour être utilisée lors de parades ou d’exercices militaires. Elle a été conçue pour avoir un son clair sur un pont de parade et la grosse caisse a été amplifiée pour faciliter la marche."}} />

                <Video linkId="_7lCJEl2hFc" title={{"en" : 'H.M. Jollies', "fr" : 'H.M. Jollies'}} description={{"en" : 'The National Band of the Naval Reserve presents "H.M. Jollies"!', "fr" : "La Musique nationale de la Réserve navale présente « H.M. Jollies » !"}} />
                <Video linkId="ghcqxFrHLv4" title={{"en" : 'H.M. Jollies (Parade Version)', "fr" : 'H.M. Jollies (Version de parade)'}} description={{"en" : 'The National Band of the Naval Reserve presents "H.M. Jollies"! This version has been specially mastered for use in parades or drill practice. It was designed to sound clear in a drill hall and the bass drum has been amplified to assist with marching.', "fr" : "La Musique nationale de la Réserve navale présente « H.M. Jollies » ! Cette version a été spécialement conçue pour être utilisée lors de parades ou d’exercices militaires. Elle a été conçue pour avoir un son clair sur un pont de parade et la grosse caisse a été amplifiée pour faciliter la marche."}} />

                <Video linkId="s1FvJf-oMkM" title={{"en" : 'The Middy', "fr" : 'The Middy'}} description={{"en" : 'The National Band of the Naval Reserve presents "The Middy"!', "fr" : "La Musique nationale de la Réserve navale présente « The Middy » !"}} />
                <Video linkId="Xs6SQPVtJhc" title={{"en" : 'The Middy (Parade Version)', "fr" : 'The Middy (Version de parade)'}} description={{"en" : 'The National Band of the Naval Reserve presents "The Middy"! This version has been specially mastered for use in parades or drill practice.  It was designed to sound clear in a drill hall and the bass drum has been amplified to assist with marching.', "fr" : "La Musique nationale de la Réserve navale présente « The Middy » ! Cette version a été spécialement conçue pour être utilisée lors de parades ou d’exercices militaires. Elle a été conçue pour avoir un son clair sur un pont de parade et la grosse caisse a été amplifiée pour faciliter la marche."}} />
            </div>
            {ending}
            
        </Layout>
    </div>
        
    )
}

export default CeremonialPage

export const Head = () => (
    <Seo title="Ceremonial Music" description="Recordings of ceremonial music made by NBNR."/>
)