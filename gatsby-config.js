module.exports = {
  siteMetadata: {
    title: "National Band of the Naval Reserve",
    siteUrl: `https://www.yourdomain.tld`,
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
        name: "Join the Band",
        link: "/join"
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
        redirect: false
      },
    },
  ],
}
