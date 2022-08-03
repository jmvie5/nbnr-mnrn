import * as React from "react"
import Layout from "../components/Layout"
import Nrd from "../components/Nrd"


const JoinPage = () => {

return (

    <Layout pageTitle="Join the Band">
        <div className="flex flex-col space-y-8">
            <div className="space-y-4">
                <p>NBNR is staffed primarily by musicians from the following six Naval Reserve Divisions, but also welcomes musicians from all NRDs. </p>
                <p>A complete list of NRDs can be found <a href="https://www.canada.ca/en/navy/corporate/our-organization/structure/navres/divisions.html" className="underline text-blue-700">here</a>.
                We encourage you to contact the DRN nearest you for further information on joining the Royal Canadian Navy.</p>
            </div>
            
            <div className="space-y-8">
                <div className="space-y-4">
                    <h1 className="font-bold text-2xl">Eastern Region :</h1>
                    <div className="grid grid-cols-2 space-x-4">
                        <Nrd name="HMCS Montcalm" street="170 Rue Dalhousie"
                            city="Québec, QC G1K 8M7" telephone="(418) 694-5560 ext. 5498"
                            recruitingPhone="(418) 694-5560 ext. 5470" email="Emploi_Montcalm-Jobs_Montcalm@forces.gc.ca" />
                        <Nrd name="HMCS Donnacona" street="3525 Rue Saint-Jacques"
                            city="Montréal, QC H4C 0A1" telephone="(514) 283-6517"
                            recruitingPhone="(514) 283-6517 ext. 214" email="Emploi_Donnacona-Jobs_Donnacona@forces.gc.ca" />
                    </div>
                </div>
                
                <div className="space-y-4">
                    <h2 className="font-bold text-2xl">Center Region :</h2>
                    <div className="grid grid-cols-2 space-x-4">
                        <Nrd name="HMCS York" street="659 Lake Shore Boulevard West"
                            city="Toronto, ON M5V 1A7" telephone="(416) 635-4400 ext. 6310"
                            recruitingPhone="(416) 635-4400" email="Jobs_York-Emploi_York@forces.gc.ca" />
                        <Nrd name="HMCS Star" street="650 Catharine Street North"
                            city="Hamilton, ON L8L 4V7" telephone="(905) 972-4000 ext. 6753"
                            recruitingPhone="(905) 972-4000 ext. 6612" email="Jobs_Star-Emploi_Star@forces.gc.ca" />
                    </div>
                </div>

                <div className="space-y-4">
                    <h2 className="font-bold text-2xl">Western Region :</h2>
                    <div className="grid grid-cols-2 space-x-4">
                        <Nrd name="HMCS Chippawa" street="1 Navy Way"
                            city="Winnipeg, MB R3C 4J7" telephone="(204) 943-7745 ext. 224"
                            recruitingPhone="(204) 943-7745 ext. 3242" email="Jobs_Chippawa-Emploi_Chippawa@forces.gc.ca" />
                        <Nrd name="HMCS Tecumseh" street="1820 - 24th Street South-West"
                            city="Calgary, AB T2T 0G6" telephone="(403) 410-2320 ext. 3766"
                            recruitingPhone="(403) 410-2475" email="Jobs_Tecumseh-Emploi_Tecumseh@forces.gc.ca" />
                    </div>
                </div>
                
            </div>
            
        </div>
    </Layout>
    
    )
}

export default JoinPage
