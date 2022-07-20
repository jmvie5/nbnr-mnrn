import * as React from "react"
import Layout from "../components/Layout"
import Video from "../components/Video"


const VideoPage = () => {

    return (

    <div>
        <Layout pageTitle="Videos">
            <div className="flex grid md:grid-cols-2 grid-col-1 gap-4 place-content-center">
                <Video linkId="HrFHISfk81I" title="Cantina Band" description="NBNR presents “Cantina Band” by John Williams (aka “Mad About Me” by Figran D’an and the Modal Nodes) for Star Wars Day, May 4th 2022." />
                <Video linkId="XLyFOpfheas" title="Under the Sea" description="For World Ocean Day 2022, NBNR presents “Under the Sea,” by Alan Menken and Howard Ashman, from the film “The Little Mermaid.”" />
                <Video linkId="5seBM8XAu5U" title="Cowgirl" description="The National Band of the Naval Reserve joins award-winning Canadian country band Nice Horse on their track “Cowgirl” for a collaboration in 2020." />
                
            </div>
            
        </Layout>
    </div>
        
    )
}

export default VideoPage
