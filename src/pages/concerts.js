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
      en: "Let’s celebrate 50 years of music",
      fr: "Célébrons ensemble 50 ans de musique",
    },
    dateParams: [2026, 7, 15],
    address: "Espace symphonique de Lévis - Lévis, QC",
    time: "14:00",
    ensemble: "Concert Band",
    ticketsLink: "https://www.eventbrite.com/e/billets-celebrons-ensemble-50-ans-de-musique-lets-celebrate-50-years-of-music-1996049792662?aff=oddtdtcreator",
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
