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
        link: "/gallery",
      },
      {
        name: "Videos",
        link: "/videos",
      },
      {
        name: "Ceremonial Music",
        link: "/ceremonial-music",
      },
      {
        name: "Concerts",
        link: "/concerts",
      },
      {
        name: "Jobs",
        link: "/jobs",
      },
    ],
  },
  plugins: [
    "gatsby-plugin-netlify",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `gallery`,
        path: `${__dirname}/gallery`,
      },
    },
    "gatsby-plugin-image",
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 90,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
        },
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://nbnr.ca",
        sitemap: "https://nbnr.ca/sitemap-index.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages: [`en`, `fr`],
        defaultLanguage: `en`,
        redirect: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `National Band of the Naval Reserve`,
        short_name: `NBNR`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#276688`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
