import * as React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { useIntl } from "react-intl";
import { Seo } from "../components/Seo";

const FiftiethAnniversaryPage = () => {
  const intl = useIntl();

  return (
    <Layout
      pageTitle="concert-50-title"
    >
      <div className="flex flex-col md:flex-row-reverse gap-8">
      <StaticImage
            alt="NBNR 50th Anniversary"
            src="../images/NBNR-50th.png"
            className="w-full"
          />
        <div className="text-left space-y-4">
          
          <p>
            <intl.formatMessage id="concert-50-1" />
            <span class='italic'>
            <intl.formatMessage id="National Band of the Naval Reserve" />
            </span>
            <intl.formatMessage id="concert-50-1.2" />
          </p>
          <p>
            <intl.formatMessage id="concert-50-2" />
          </p>
          <p class="font-bold">
            <intl.formatMessage id="concert-50-date-1" />
            <span class='italic'><intl.formatMessage id="concert-50-location" /></span>
            <intl.formatMessage id="concert-50-date-2" />
          </p>
          <p>
            <intl.formatMessage id="concert-50-4" />
          </p>
          <p>
            <intl.formatMessage id="concert-50-5" />
          </p>
        </div>
        
      </div>
    </Layout>
  );
};

export default FiftiethAnniversaryPage;

export const Head = () => (
  <Seo
    title="50th Anniversary"
    description="The National Band of the Naval Reserve (NBNR), formed in 1976, is comprised of Reservist musicians chosen from the six Naval Reserve Division bands across Canada."
  />
);
