import * as React from "react";
import { useIntl } from "react-intl";
import { LocalizedLink } from "gatsby-plugin-i18n-l10n";
import Layout from "../components/Layout";

const NotFoundPage = () => {
  const intl = useIntl();

  let mainTxt = (
    <div className="space-y-4">
      <p>Page not found.</p>
      <p>
        Return to{" "}
        <LocalizedLink to="/" className="underline text-blue-700">
          Home Page
        </LocalizedLink>
        .
      </p>
    </div>
  );

  if (intl.locale === "fr-CA") {
    mainTxt = (
      <div className="space-y-4">
        <p>Page introuvable.</p>
        <p>
          Retournez à la page d'
          <LocalizedLink to="/" className="underline text-blue-700">
            accueil
          </LocalizedLink>
          .
        </p>
      </div>
    );
  }

  return (
    <Layout pageTitle="Error 404" description="Page not found.">
      {mainTxt}
    </Layout>
  );
};

export default NotFoundPage;
