import * as React from "react"
import Layout from "../components/Layout"
import Nrd from "../components/Nrd"
import { useIntl } from "gatsby-plugin-intl"
import { Seo } from "../components/Seo"

const JobsPage = () => {
    const intl = useIntl()

    let intro = <div className="space-y-4"><p>NBNR is staffed primarily by musicians from the following six Naval Reserve Divisions (NRD), but also welcomes musicians from all NRDs.</p><p>A complete list of NRDs can be found <a href="https://www.canada.ca/en/navy/corporate/our-organization/structure/navres/divisions.html" className="underline text-blue-700">here</a>.
    We encourage you to contact the DRN nearest you for further information on joining the Royal Canadian Navy.</p><p>You can have more information on being a musican in the Canadian Armed Forces <a href="https://forces.ca/en/career/musician/" className="underline text-blue-700">here</a></p></div>;

    if (intl.locale === "fr") {
        intro = <div className="space-y-4"><p>Le personnel de la MNRN se compose principalement de musiciens des six divisions de la Réserve navale (DRN) suivantes , mais elle accueille également des musiciens de toutes les DRN.</p><p>Une liste complète des DRN est disponible <a href="https://www.canada.ca/fr/marine/organisation/notre-organisation/structure/resnav/divisions.html" className="underline text-blue-700">ici</a>.
        Nous vous encourageons à communiquer avec la DRN la plus près de chez vous pour obtenir de plus amples renseignements sur les procédures d'enrôlement dans la Marine royale canadienne.</p><p>Vous pouvez obtenir plus d'informations sur le métier de musicien dans les Forces armées canadiennes <a href="https://forces.ca/fr/carriere/musicien/" className="underline text-blue-700">ici</a></p></div>;
    }
    

    return (

        <Layout pageTitle="Jobs" description="Job opportunities with NBNR and how to apply.">
            <div className="flex flex-col space-y-8">
                {intro}
                
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h1 className="font-bold text-2xl"><intl.formatMessage id="Eastern Region" /> :</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 sm:space-x-4 space-y-6 sm:space-y-0">
                            <Nrd name="Montcalm" street="170 Rue Dalhousie"
                                city="Québec, QC G1K 8M7" telephone="(418) 694-5560 ext. 5498"
                                recruitingPhone="(418) 694-5560 ext. 5470" email="Emploi_Montcalm-Jobs_Montcalm@forces.gc.ca" />
                            <Nrd name="Donnacona" street="3525 Rue Saint-Jacques"
                                city="Montréal, QC H4C 0A1" telephone="(514) 283-6517"
                                recruitingPhone="(514) 283-6517 ext. 214" email="Emploi_Donnacona-Jobs_Donnacona@forces.gc.ca" />
                        </div>
                    </div>
                    
                    <div className="space-y-4">
                        <h1 className="font-bold text-2xl"><intl.formatMessage id="Center Region"/> :</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 sm:space-x-4 space-y-6 sm:space-y-0">
                            <Nrd name="York" street="659 Lake Shore Boulevard West"
                                city="Toronto, ON M5V 1A7" telephone="(416) 635-4400 ext. 6310"
                                recruitingPhone="(416) 635-4400" email="Jobs_York-Emploi_York@forces.gc.ca" />
                            <Nrd name="Star" street="650 Catharine Street North"
                                city="Hamilton, ON L8L 4V7" telephone="(905) 972-4000 ext. 6753"
                                recruitingPhone="(905) 972-4000 ext. 6612" email="Jobs_Star-Emploi_Star@forces.gc.ca" />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h1 className="font-bold text-2xl"><intl.formatMessage id="Western Region"/> :</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 sm:space-x-4 space-y-6 sm:space-y-0">
                            <Nrd name="Chippawa" street="1 Navy Way"
                                city="Winnipeg, MB R3C 4J7" telephone="(204) 943-7745 ext. 224"
                                recruitingPhone="(204) 943-7745 ext. 3242" email="Jobs_Chippawa-Emploi_Chippawa@forces.gc.ca" />
                            <Nrd name="Tecumseh" street="1820 - 24th Street South-West"
                                city="Calgary, AB T2T 0G6" telephone="(403) 410-2320 ext. 3766"
                                recruitingPhone="(403) 410-2475" email="Jobs_Tecumseh-Emploi_Tecumseh@forces.gc.ca" />
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </Layout>
        
        )
}

export default JobsPage

export const Head = () => (
    <Seo title="Jobs" description="Job opportunities with NBNR and how to apply."/>
)