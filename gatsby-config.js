module.exports = {
  siteMetadata: {
    title: "National Band of the Naval Reserve",
    description: "National Band of the Naval Reserve",
    siteUrl: `https://nbnr.ca`,
    image: `/src/images/icon.png`,
    menuLinks: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "About",
        link: "/about",
      },
      {
        name: "Gallery",
        link: "/gallery"
      },
      {
        name: "Videos",
        link: "/videos"
      },
      {
        name: "Concerts",
        link: "/concerts"
      },
      {
        name: "Jobs",
        link: "/jobs"
      }
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `gallery`,
        path: `${__dirname}/gallery`,
      }
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-mdx",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages: [`en`, `fr`],
        defaultLanguage: `en`,
        redirect: true
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `National Band of the Naval Reserve`,
        short_name: `NBNR`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#0ea5e9`,
        display: `standalone`,
        icon: `src/images/icon.png`
      }
    },
  ],
}
