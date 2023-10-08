import * as React from "react";
import { useIntl } from "react-intl";
import { LocalizedLink } from "gatsby-plugin-i18n-l10n";

const HomeLinks = ({ title, link, children }) => {
  //title = {en, fr}
  //link = Gatsby page link
  const intl = useIntl();

  return (
    <LocalizedLink
      to={link}
      className="flex p-4 gap-2 max-w-xs max-h-80 border rounded-xl border-sky-800 drop-shadow-2xl bg-sky-800/90 overflow-auto break-words shadow-md shadow-sky-800/70 place-items-center z-30"
    >
      <div className="basis-1/4">{children}</div>
      <h1 className="font-bold text-xl">{title[intl.locale]}</h1>
    </LocalizedLink>
  );
};

export default HomeLinks;
