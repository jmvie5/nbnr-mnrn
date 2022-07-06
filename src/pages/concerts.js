import * as React from "react"
import Layout from "../components/Layout"
import Concert from "../components/Concert"

const ConcertsPage = () => {
    return (

        <div>
            <Layout pageTitle="Concerts">
                <div className="justify-center flex flex-col space-y-4 divide-y-2 divide-gray-800">
                    <Concert date="July 12 2022" title="Heavy Horse Show" time="21:00" adress="Calgary Stampede" ensemble="Jazz Combo" ticketsLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ"/>
                    <Concert date="July 31 2022" title="Beach Concert" time="13:00" adress="Victoria" ensemble="Concert Band" ticketsLink="free"/>
                </div>
            </Layout>
        </div>
        
    )
}

export default ConcertsPage
