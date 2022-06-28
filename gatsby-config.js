module.exports = {
  siteMetadata: {
    title: "NBNR-MNRN",
    siteUrl: `https://www.yourdomain.tld`,
    menuLinks: [
      {
        name: "About",
        link: "/about",
      },
      {
        name: "Home",
        link: "/",
      },
      {
        name: "Gallery",
        link: "/gallery"
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
  ],
}
