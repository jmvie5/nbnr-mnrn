import * as React from "react";
import Layout from "../components/Layout";
import Concert from "../components/Concert";
import { Seo } from "../components/Seo";
import { useIntl } from "react-intl";

/*Params for Concert {
        title = {en:"", fr:""},
        dateParams = [int year, int month, int day], month start at 0,
        address = "",
        time = "00:00" or 0 if none,
        ensemble = str in {Concert Band, Parade Band, Jazz Ensemble, Flute Ensemble, Woodwind Ensemble, Brass Ensemble, Percussion Section},
        ticketsLink = str url or "free"
*/
const concertList = [
  {
    title: {
      en: "Celebrating 100 years of the Naval Reserve in Canada",
      fr: "Célébration des 100 ans de la Réserve navale au Canada",
    },
    dateParams: [2023, 7, 20],
    address: "New Brunswick Naval Memorial, 130 Fort Latour Drive, Saint John.",
    time: "12:00",
    ensemble: "Concert Band",
    ticketsLink: "free",
    program: {
      en: "https://nbnr.ca/Program_English.pdf",
      fr: "https://nbnr.ca/Programme_Francais.pdf",
    },
  },
];
let isConcert = false;

const ConcertsPage = () => {
  const intl = useIntl();

  return (
    <div>
      <Layout pageTitle="Concerts" description="NBRN upcoming concerts.">
        <div className="flex flex-col space-y-4 divide-y-2 divide-gray-800">
          {concertList.map((concert) => {
            var concertDate = new Date(
              concert.dateParams[0],
              concert.dateParams[1],
              concert.dateParams[2],
              23,
              59
            );
            var dateNow = new Date();
            if (concertDate >= dateNow) {
              isConcert = true;
              return <Concert data={concert} />;
            }
            return null;
          })}
        </div>
        {isConcert ? <></> : <intl.formatMessage id="No Concert" />}
      </Layout>
    </div>
  );
};

export default ConcertsPage;

export const Head = () => (
  <Seo title="Concerts" description="NBRN upcoming concerts." />
);
