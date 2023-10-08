import * as React from "react";
import { LocalizedLink } from "gatsby-plugin-i18n-l10n";
import { useIntl } from "react-intl";
import Layout from "../components/Layout";
import Video from "../components/Video";
import { Seo } from "../components/Seo";

const CeremonialPage = () => {
  const intl = useIntl();

  let ending = (
    <div className="space-y-4">
      <p>
        Find more videos made by NBNR on the our{" "}
        <LocalizedLink to="/videos" className="underline text-blue-700">
          video page
        </LocalizedLink>{" "}
        or on our{" "}
        <a
          href="https://www.youtube.com/channel/UC9X4dG-fBwQ0fzSIoD063bw/videos"
          className="underline text-blue-700"
        >
          Youtube
        </a>{" "}
        page.
      </p>
    </div>
  );

  if (intl.locale === "fr-CA") {
    ending = (
      <div className="space-y-4">
        <p>
          Vous trouverez d'autres vidéos réalisées par la MNRN dans l'onglet{" "}
          <LocalizedLink to="/videos" className="underline text-blue-700">
            vidéos
          </LocalizedLink>{" "}
          ou sur notre page{" "}
          <a
            href="https://www.youtube.com/channel/UC9X4dG-fBwQ0fzSIoD063bw/videos"
            className="underline text-blue-700"
          >
            Youtube
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <div>
      <Layout
        pageTitle="Ceremonial Music"
        description="Recordings of ceremonial music made by NBNR."
      >
        <div className="grid md:grid-cols-2 grid-col-1 gap-4 place-content-center mb-8">
          <Video
            linkId="IXJbh-C0xps"
            title={{ "en-CA": "O Canada", "fr-CA": "Ô Canada" }}
            description={{
              "en-CA":
                'The National Band of the Naval Reserve presents the Canadian national anthem, "O Canada"!',
              "fr-CA":
                "La Musique nationale de la Réserve navale présente l'hymne national canadien, « Ô Canada » !",
            }}
          />

          <Video
            linkId="2kOZ9igydOE"
            title={{
              "en-CA": "God Save the King",
              "fr-CA": "Dieu protège le Roi",
            }}
            description={{
              "en-CA":
                'The National Band of the Naval Reserve presents "God Save the King!"',
              "fr-CA":
                " La Musique nationale de la Réserve navale présente « Dieu protège le Roi » !",
            }}
          />

          <Video
            linkId="sFun724J3xE"
            title={{
              "en-CA": "Eternal Father (Naval Hymn)",
              "fr-CA": "Eternal Father (Hymne naval)",
            }}
            description={{
              "en-CA":
                'The National Band of the Naval Reserve presents the Naval Hymn, "Eternal Father".',
              "fr-CA":
                " La Musique nationale de la Réserve navale présente l'hymne naval, « Eternal Father ».",
            }}
          />

          <Video
            linkId="KOhCKUo3H4I"
            title={{
              "en-CA": "The Standard of St. George",
              "fr-CA": "The Standard of St. George",
            }}
            description={{
              "en-CA":
                'The National Band of the Naval Reserve presents "The Standard of St. George"!',
              "fr-CA":
                "La Musique nationale de la Réserve navale présente « The Standard of St. George » !",
            }}
          />

          <Video
            linkId="iiLay-3Gq4I"
            title={{ "en-CA": "Naval Salute", "fr-CA": "Salut naval" }}
            description={{
              "en-CA":
                "The National Band of the Naval Reserve presents the Naval Salute!",
              "fr-CA":
                "La Musique nationale de la Réserve navale présente le Salut naval !",
            }}
          />

          <Video
            linkId="2VzODdH0-68"
            title={{ "en-CA": "General Salute", "fr-CA": "Salut général" }}
            description={{
              "en-CA":
                "The National Band of the Naval Reserve presents the General Salute!",
              "fr-CA":
                "La Musique nationale de la Réserve navale présente le Salut général !",
            }}
          />

          <Video
            linkId="ffK8UTIz_54"
            title={{
              "en-CA": "Last Post & Naval Reveille",
              "fr-CA": "Dernier appel & Réveil naval",
            }}
            description={{
              "en-CA":
                "The National Band of the Naval Reserve presents the Last Post and the Naval Reveille. There is a minute of silence that begins at 1:29.",
              "fr-CA":
                "La Musique nationale de la Réserve navale présente le Dernier appel et le Réveil naval. Il y a une minute de silence qui commence à 1:29.",
            }}
          />

          <Video
            linkId="AqUCouqeeHY"
            title={{
              "en-CA": "Last Post & Rouse",
              "fr-CA": "Dernier appel & Réveil",
            }}
            description={{
              "en-CA":
                "The National Band of the Naval Reserve presents the Last Post and Rouse. There is a minute of silence that begins at 1:29.",
              "fr-CA":
                "La Musique nationale de la Réserve navale présente le Dernier appel et Réveil. Il y a une minute de silence qui commence à 1:29.",
            }}
          />

          <Video
            linkId="MWZOG-GmC3E"
            title={{ "en-CA": "Sunset", "fr-CA": "Coucher du soleil" }}
            description={{
              "en-CA":
                "The Sunset Ceremony is a combination of three ceremonies: the ancient ceremony of Beating Retreat, Tattoo, and lowering of the national flag. The Navy Sunset signifies the ending of the day with the lowering of the Royal Canadian Naval Ensign on Her Majesty's Canadian Ships.",
              "fr-CA":
                "La cérémonie du coucher du soleil est une combinaison de trois cérémonies: l'ancienne cérémonie de battement de la retraite, le Tattoo, et la rentrée des couleurs du pavillon nationale. Le coucher du soleil de la Marine signifie la fin de la journée avec la rentrée des couleurs du pavillon naval canadien à bord des navires canadiens de Sa Majesté.",
            }}
          />

          <Video
            linkId="gMZvJBO_7uc"
            title={{ "en-CA": "Heart of Oak", "fr-CA": "Heart of Oak" }}
            description={{
              "en-CA":
                'The National Band of the Naval Reserve presents the Royal Canadian Navy march, "Heart of Oak"!',
              "fr-CA":
                "La Musique nationale de la Réserve navale présente la marche de la Marine royale canadienne, « Heart of Oak » !",
            }}
          />
          <Video
            linkId="2IAskVKkt4k"
            title={{
              "en-CA": "Heart of Oak Parade Version (1 Repeat)",
              "fr-CA": "Heart of Oak, version de parade (1 répétition)",
            }}
            description={{
              "en-CA":
                'The National Band of the Naval Reserve presents "Heart of Oak"! This version has been specially mastered for use in parades or drill practice.  It was designed to sound clear in a drill hall and the bass drum has been amplified to assist with marching.',
              "fr-CA":
                "La Musique nationale de la Réserve navale présente la marche de la Marine royale canadienne, « Heart of Oak » ! Cette version a été spécialement conçue pour être utilisée lors de parades ou d’exercices militaires. Elle a été conçue pour avoir un son clair sur un pont de parade et la grosse caisse a été amplifiée pour faciliter la marche.",
            }}
          />
          <Video
            linkId="rBsTsxtS3wY"
            title={{
              "en-CA": "Heart of Oak Parade Version (3 Repeats)",
              "fr-CA": "Heart of Oak, version de parade (3 répétitions)",
            }}
            description={{
              "en-CA":
                'The National Band of the Naval Reserve presents "Heart of Oak" with three repeats! This version has been specially mastered for use in parades or drill practice. It was designed to sound clear in a drill hall and the bass drum has been amplified to assist with marching.',
              "fr-CA":
                "La Musique nationale de la Réserve navale présente « Heart of Oak » avec trois répétitions! Cette version a été spécialement conçue pour être utilisée lors de parades ou d’exercices militaires. Elle a été conçue pour avoir un son clair sur un pont de parade et la grosse caisse a été amplifiée pour faciliter la marche. ",
            }}
          />

          <Video
            linkId="Q4n6C0PNwgo"
            title={{ "en-CA": "Scipio", "fr-CA": "Scipio" }}
            description={{
              "en-CA":
                'The National Band of the Naval Reserve presents "Scipio"!',
              "fr-CA":
                "La Musique nationale de la Réserve navale présente « Scipio » !",
            }}
          />
          <Video
            linkId="OqftL3aXNtU"
            title={{
              "en-CA": "Scipio (Parade Version)",
              "fr-CA": "Scipio (Version de parade)",
            }}
            description={{
              "en-CA":
                'The National Band of the Naval Reserve presents "Scipio"! This version has been specially mastered for use in parades or drill practice. It was designed to sound clear in a drill hall and the bass drum has been amplified to assist with marching.',
              "fr-CA":
                "La Musique nationale de la Réserve navale présente « Scipio » ! Cette version a été spécialement conçue pour être utilisée lors de parades ou d’exercices militaires. Elle a été conçue pour avoir un son clair sur un pont de parade et la grosse caisse a été amplifiée pour faciliter la marche.",
            }}
          />

          <Video
            linkId="tceAtMlXowY"
            title={{ "en-CA": "RCAF March Past", "fr-CA": "RCAF March Past" }}
            description={{
              "en-CA":
                "The National Band of the Naval Reserve presents the Royal Canadian Air Force (RCAF) March Past!",
              "fr-CA":
                "La Musique nationale de la Réserve navale présente le défilé de l’Aviation royale canadienne !",
            }}
          />
          <Video
            linkId="T6uaSiI3scg"
            title={{
              "en-CA": "RCAF March Past (Parade Version)",
              "fr-CA": "RCAF March Past (Version de parade)",
            }}
            description={{
              "en-CA":
                'The National Band of the Naval Reserve presents "RCAF March Past"! This version has been specially mastered for use in parades or drill practice. It was designed to sound clear in a drill hall and the bass drum has been amplified to assist with marching.',
              "fr-CA":
                "La Musique nationale de la Réserve navale présente « RCAF March Past » ! Cette version a été spécialement conçue pour être utilisée lors de parades ou d’exercices militaires. Elle a été conçue pour avoir un son clair sur un pont de parade et la grosse caisse a été amplifiée pour faciliter la marche.",
            }}
          />

          <Video
            linkId="E8mGUUm6KWI"
            title={{ "en-CA": "Navy Medley", "fr-CA": "Navy Medley" }}
            description={{
              "en-CA":
                'The National Band of the Naval Reserve presents "Navy Medley"!',
              "fr-CA":
                "La Musique nationale de la Réserve navale présente « Navy Medley » !",
            }}
          />
          <Video
            linkId="8BsMTz6EX8o"
            title={{
              "en-CA": "Navy Medley (Parade Version)",
              "fr-CA": "Navy Medley (Version de parade)",
            }}
            description={{
              "en-CA":
                'The National Band of the Naval Reserve presents "Navy Medley"! This version has been specially mastered for use in parades or drill practice. It was designed to sound clear in a drill hall and the bass drum has been amplified to assist with marching.',
              "fr-CA":
                "La Musique nationale de la Réserve navale présente « Navy Medley » ! Cette version a été spécialement conçue pour être utilisée lors de parades ou d’exercices militaires. Elle a été conçue pour avoir un son clair sur un pont de parade et la grosse caisse a été amplifiée pour faciliter la marche.",
            }}
          />

          <Video
            linkId="pmp7RdSXhIc"
            title={{ "en-CA": "Invercargill", "fr-CA": "Invercargill" }}
            description={{
              "en-CA":
                'The National Band of the Naval Reserve presents "Invercargill"!',
              "fr-CA":
                "La Musique nationale de la Réserve navale présente « Invercargill » !",
            }}
          />
          <Video
            linkId="DLwab30Y8Ws"
            title={{
              "en-CA": "Invercargill (Parade Version)",
              "fr-CA": "Invercargill (Version de parade)",
            }}
            description={{
              "en-CA":
                'The National Band of the Naval Reserve presents "Invercargill"! This version has been specially mastered for use in parades or drill practice. It was designed to sound clear in a drill hall and the bass drum has been amplified to assist with marching.',
              "fr-CA":
                "La Musique nationale de la Réserve navale présente « Invercargill » ! Cette version a été spécialement conçue pour être utilisée lors de parades ou d’exercices militaires. Elle a été conçue pour avoir un son clair sur un pont de parade et la grosse caisse a été amplifiée pour faciliter la marche.",
            }}
          />

          <Video
            linkId="G20lnSmkfrk"
            title={{
              "en-CA": "The Great Little Army",
              "fr-CA": "The Great Little Army",
            }}
            description={{
              "en-CA":
                'The National Band of the Naval Reserve presents the march of the Canadian Army, "The Great Little Army"!',
              "fr-CA":
                "La Musique nationale de la Réserve navale présente la marche de l'Armée canadienne, « The Great Little Army » !",
            }}
          />
          <Video
            linkId="C0wqm7XzcOw"
            title={{
              "en-CA": "The Great Little Army (Parade Version)",
              "fr-CA": "The Great Little Army (Version de parade)",
            }}
            description={{
              "en-CA":
                'The National Band of the Naval Reserve presents "The Great Little Army"! This version has been specially mastered for use in parades or drill practice. It was designed to sound clear in a drill hall and the bass drum has been amplified to assist with marching.',
              "fr-CA":
                "La Musique nationale de la Réserve navale présente « The Great Little Army » ! Cette version a été spécialement conçue pour être utilisée lors de parades ou d’exercices militaires. Elle a été conçue pour avoir un son clair sur un pont de parade et la grosse caisse a été amplifiée pour faciliter la marche.",
            }}
          />

          <Video
            linkId="_7lCJEl2hFc"
            title={{ "en-CA": "H.M. Jollies", "fr-CA": "H.M. Jollies" }}
            description={{
              "en-CA":
                'The National Band of the Naval Reserve presents "H.M. Jollies"!',
              "fr-CA":
                "La Musique nationale de la Réserve navale présente « H.M. Jollies » !",
            }}
          />
          <Video
            linkId="ghcqxFrHLv4"
            title={{
              "en-CA": "H.M. Jollies (Parade Version)",
              "fr-CA": "H.M. Jollies (Version de parade)",
            }}
            description={{
              "en-CA":
                'The National Band of the Naval Reserve presents "H.M. Jollies"! This version has been specially mastered for use in parades or drill practice. It was designed to sound clear in a drill hall and the bass drum has been amplified to assist with marching.',
              "fr-CA":
                "La Musique nationale de la Réserve navale présente « H.M. Jollies » ! Cette version a été spécialement conçue pour être utilisée lors de parades ou d’exercices militaires. Elle a été conçue pour avoir un son clair sur un pont de parade et la grosse caisse a été amplifiée pour faciliter la marche.",
            }}
          />

          <Video
            linkId="s1FvJf-oMkM"
            title={{ "en-CA": "The Middy", "fr-CA": "The Middy" }}
            description={{
              "en-CA":
                'The National Band of the Naval Reserve presents "The Middy"!',
              "fr-CA":
                "La Musique nationale de la Réserve navale présente « The Middy » !",
            }}
          />
          <Video
            linkId="Xs6SQPVtJhc"
            title={{
              "en-CA": "The Middy (Parade Version)",
              "fr-CA": "The Middy (Version de parade)",
            }}
            description={{
              "en-CA":
                'The National Band of the Naval Reserve presents "The Middy"! This version has been specially mastered for use in parades or drill practice.  It was designed to sound clear in a drill hall and the bass drum has been amplified to assist with marching.',
              "fr-CA":
                "La Musique nationale de la Réserve navale présente « The Middy » ! Cette version a été spécialement conçue pour être utilisée lors de parades ou d’exercices militaires. Elle a été conçue pour avoir un son clair sur un pont de parade et la grosse caisse a été amplifiée pour faciliter la marche.",
            }}
          />
        </div>
        {ending}
      </Layout>
    </div>
  );
};

export default CeremonialPage;

export const Head = () => (
  <Seo
    title="Ceremonial Music"
    description="Recordings of ceremonial music made by NBNR."
  />
);
