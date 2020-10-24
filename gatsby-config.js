module.exports = {
  siteMetadata: {
    title: `codeinbox.me`,
    description: `
      Understanding javascript
    `.trim(),
    author: `@daniloster`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // replace `UA-XXXXXXXXX-X` with your own Google Analytics Tracking ID
        trackingId: `G-VG33G5YQY9`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "articles",
        path: `${__dirname}/src/articles`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `codeinbox.me`,
        short_name: `codeinbox`,
        start_url: `/`,
        theme_color: `#ffffff`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `src/images/android-chrome-512x512.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
