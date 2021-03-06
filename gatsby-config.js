require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {

    siteTitle: `Barak John`,

    siteTitleAlt: `Barak`,

    siteHeadline: `Barak's Blog`,

    siteUrl: `https://barac.dev`,

    siteDescription: `Barak John's portfolio as a fullstack developer equiped with a blog to share simple thoughts`,

    siteLanguage: `en`,

    siteImage: `/banner.jpeg`,
    // Twitter Handle
    author: `@barak_codes`,

    externalLinks: [
      {
        name: `Twitter`,
        url: `https://twitter.com/barak_codes`
      },
      {
        name: `Instagram`,
        url: `https://www.instagram.com/barak_breezy/`
      }
    ],
    navigation: [
      {
        title: `Blog`,
        slug: `/blog`,
      },
      {
        title: `About`,
        slug: `/about`,
      },
    ],
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-155069461-1",
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Barak John`,
        short_name: `Barak`,
        description: `Fullstack developer portfolio and blog, Barak John blogs and shows off the work he does with Lockwood Technolgy`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    // `gatsby-plugin-webpack-bundle-analyser-v2`,
  ],
}
