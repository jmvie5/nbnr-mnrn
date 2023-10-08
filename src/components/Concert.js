import * as React from "react";
import { useIntl } from "react-intl";

const Concert = ({ data }) => {
  //title, dateParams, address, time, ensemble, ticketsLink
  //title = {en, fr}
  //dateParams = [int year, int month, int day]
  //time = str, or int 0 if none
  //All other params are strings

  const intl = useIntl();

  const mapLink = "https://www.google.ca/maps/search/" + data.address;

  let lang = "en-EN";
  if (intl.locale === "fr-CA") {
    lang = "fr-FR";
  }

  const options = { year: "numeric", month: "long", day: "numeric" };

  let concertTitle;

  const concertDate = new Date(
    data.dateParams[0],
    data.dateParams[1],
    data.dateParams[2]
  );

  if (data.time === 0) {
    concertTitle = data.title[intl.locale];
  } else {
    concertTitle = `${data.title[intl.locale]} @${data.time}`;
  }

  //ticket link
  let tickets;
  let isFree;
  if (data.ticketsLink === "free") {
    tickets = <intl.formatMessage id="FREE" />;
    isFree = true;
  } else {
    tickets = <intl.formatMessage id="TICKETS" />;
    isFree = false;
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-between p-8">
      <div>
        <h1 className="font-bold">
          {concertDate.toLocaleDateString(lang, options)}
        </h1>
        <h2>{concertTitle}</h2>
        <a href={mapLink} className="text-base text-blue-800 underline">
          {data.address}
        </a>
        <p className="text-base">
          <intl.formatMessage id="Ensemble" /> :{" "}
          <intl.formatMessage id={data.ensemble} />
        </p>
        {data.program ? (
          <a
            href={data.program[intl.locale]}
            target="_blank"
            rel="noreferrer"
            aria-label="program"
            className="text-base text-blue-800 underline"
          >
            <intl.formatMessage id="Program" />
          </a>
        ) : (
          <></>
        )}
      </div>
      <div className="self-center">
        {isFree ? (
          <p className="border-2 border-sky-800 p-2 text-sky-800 hover:bg-sky-800 hover:text-sky-100">
            {tickets}
          </p>
        ) : (
          <a
            href={data.ticketsLink}
            className="border-2 border-sky-800 p-2 text-sky-800 hover:bg-sky-800 hover:text-sky-100"
          >
            {tickets}
          </a>
        )}
      </div>
    </div>
  );
};

export default Concert;
