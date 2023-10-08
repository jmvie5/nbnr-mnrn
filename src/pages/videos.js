import * as React from "react";
import { useIntl } from "react-intl";
import { LocalizedLink } from "gatsby-plugin-i18n-l10n";
import Layout from "../components/Layout";
import Video from "../components/Video";
import { Seo } from "../components/Seo";

const VideoPage = () => {
  const intl = useIntl();

  let ending = (
    <div className="space-y-4">
      <p>
        Looking for Ceremonial Music? Go on the{" "}
        <LocalizedLink
          to="/ceremonial-music"
          className="underline text-blue-700"
        >
          Ceremonial Music page
        </LocalizedLink>{" "}
        or find more videos made by NBNR on our{" "}
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
          Vous cherchez la musique de cérémonie ? Allez sur l'onglet{" "}
          <LocalizedLink
            to="/ceremonial-music"
            className="underline text-blue-700"
          >
            musique de cérémonie
          </LocalizedLink>{" "}
          ou allez sur notre page{" "}
          <a
            href="https://www.youtube.com/channel/UC9X4dG-fBwQ0fzSIoD063bw/videos"
            className="underline text-blue-700"
          >
            Youtube
          </a>{" "}
          pour trouverez d'autres vidéos réalisées par la MNRN.
        </p>
      </div>
    );
  }
  return (
    <div>
      <Layout
        pageTitle="Videos"
        description="Recordings and other videos of NBNR."
      >
        <div className="grid md:grid-cols-2 grid-col-1 gap-4 place-content-center mb-8">
          <Video
            linkId="aq4UVWGHEl0"
            title={{
              "en-CA": "Maple Leaf Forever",
              "fr-CA": "Maple Leaf Forever",
            }}
            description={{
              "en-CA":
                'The National Band of the Naval Reserve presents Alexander Muir\'s "The Maple Leaf Forever".',
              "fr-CA":
                "La Musique nationale de la Réserve navale interprète la pièce « The Maple Leaf Forever » de Alexander Muir.",
            }}
          />
          <Video
            linkId="AuK4C8Isv4w"
            title={{
              "en-CA": "Marching Upon the Seas",
              "fr-CA": "Marching Upon the Seas",
            }}
            description={{
              "en-CA":
                '"Marching Upon the Seas" is the Naval Reserve Centennial March by Sailor 3rd Class Tarek Aaron Bouhennache of HMCS DONNACONA."',
              "fr-CA":
                "« Marching Upon the Seas » est la marche du centenaire de la Réserve navale, composée par le matelot de 3e classe Tarek Aaron Bouhennache du NCSM DONNACONA.",
            }}
          />
          <Video
            linkId="kg6oX0n0NFI"
            title={{
              "en-CA":
                "Five Foot Two, Eyes of Blue (Has Anybody Seen My Girl?)",
              "fr-CA":
                "Five Foot Two, Eyes of Blue (Has Anybody Seen My Girl?)",
            }}
            description={{
              "en-CA":
                'The National Band of the Naval Reserve presents "Five Foot Two, Eyes of Blue" by Ray Henderson.',
              "fr-CA":
                "La Musique nationale de la Réserve navale vous présente « Five Foot Two, Eyes of Blue » de Ray Henderson.",
            }}
          />
          <Video
            linkId="ggJv9toWdUI"
            title={{
              "en-CA": "Nightfall in Camp",
              "fr-CA": "Nightfall in Camp",
            }}
            description={{
              "en-CA":
                "The National Band of the Naval Reserve presents the traditional piece “Nightfall in Camp” in honour of Remembrance Day 2022. This piece combines “The Last Post” and the hymn “Unto the Hills”. This piece was recorded live during our summer 2022 concert in Calgary, AB.",
              "fr-CA":
                "La Musique nationale de la Réserve navale présente la pièce traditionnelle « Nightfall in Camp », en l'honneur du jour du Souvenir 2022. Cette pièce combine « The Last Post » et l'hymne « Unto the Hills ». Cette pièce a été enregistrée en direct lors de notre concert de l'été 2022 à Calgary, AB.",
            }}
          />
          <Video
            linkId="HrFHISfk81I"
            title={{ "en-CA": "Cantina Band", "fr-CA": "Cantina Band" }}
            description={{
              "en-CA":
                "NBNR presents “Cantina Band” by John Williams (aka “Mad About Me” by Figran D’an and the Modal Nodes) for Star Wars Day, May 4th 2022.",
              "fr-CA":
                "La MNRN présente « Cantina Band » de John Williams (alias « Mad About Me » de Figran D'an and the Modal Nodes) pour la Journée Star Wars, le 4 mai 2022.",
            }}
          />
          <Video
            linkId="XLyFOpfheas"
            title={{ "en-CA": "Under the Sea", "fr-CA": "Sous l'océan" }}
            description={{
              "en-CA":
                "For World Ocean Day 2022, NBNR presents “Under the Sea,” by Alan Menken and Howard Ashman, from the film “The Little Mermaid.”",
              "fr-CA":
                "Pour la Journée mondiale de l’océan 2022, la MNRN vous présente « Sous l’océan », d’Alan Menken et Howard Ashman, tiré du film « La petite sirène ».",
            }}
          />
          <Video
            linkId="5seBM8XAu5U"
            title={{ "en-CA": "Cowgirl", "fr-CA": "Cowgirl" }}
            description={{
              "en-CA":
                "The National Band of the Naval Reserve joins award-winning Canadian country band Nice Horse on their track “Cowgirl” for a collaboration in 2020.",
              "fr-CA":
                "En 2020, la Musique nationale de la Réserve navale s’est jointe au groupe country canadien primé Nice Horse pour une collaboration musicale sur leur pièce « Cowgirl ».",
            }}
          />
          <Video
            linkId="WuXncjoM_2k"
            title={{
              "en-CA": "Fanfare for the Common Man",
              "fr-CA": "Fanfare for the Common Man",
            }}
            description={{
              "en-CA":
                "NBNR presents Aaron Copland’s standard “Fanfare for the Common Man.”",
              "fr-CA":
                "La MNRN vous présente le classique, « Fanfare for the Common Man », d’Aaron Copland.",
            }}
          />
          <Video
            linkId="oUnNRuYYsDs"
            title={{ "en-CA": "Libertango", "fr-CA": "Libertango" }}
            description={{
              "en-CA":
                "NBNR’s flute ensemble presents Astor Piazzolla’s nuevo tango piece, “Libertango.”",
              "fr-CA":
                "L’ensemble de flutes de la MNRN interprète la pièce de tango nuevo « Libertango » d’Astor Piazzolla.",
            }}
          />
          <Video
            linkId="r-ygKKxYcWU"
            title={{
              "en-CA": "Meet the Bands!",
              "fr-CA": "Rencontrez les Musiques!",
            }}
            description={{
              "en-CA":
                "Check out what life is like as a musician in Canada’s Naval Reserve! Meet the bands and find out if a life of adventure, travel, and playing music is for you. ",
              "fr-CA":
                "Découvrez ce qu’est la vie d’un musicien dans la Réserve navale du Canada ! Rencontrez les Musiques et découvrez si une vie d’aventure, de voyages et de musique est faite pour vous.",
            }}
          />
        </div>
        {ending}
      </Layout>
    </div>
  );
};

export default VideoPage;

export const Head = () => (
  <Seo title="Videos" description="Recordings and other videos of NBNR." />
);
