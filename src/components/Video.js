import * as React from "react";
import { useIntl } from "react-intl";
//import '@justinribeiro/lite-youtube' now in gatsby-browser.js and gatsby-ssr.js;

const Video = ({ linkId, title, description }) => {
  //linkId = string
  //title and description = {{"en" : "description", "fr" : "description" }}
  const intl = useIntl();

  return (
    <div className="flex flex-col pb-4 px-4 gap-2">
      <h1 className="font-bold text-xl">{title[intl.locale]}</h1>
      <lite-youtube videoid={linkId}></lite-youtube>
      <p className="">{description[intl.locale]}</p>
    </div>
  );
};

export default Video;
