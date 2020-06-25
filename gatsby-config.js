module.exports = {
  siteMetadata: {
    title: `InterOps`,
    description: `Here to help with any technology obstacle you may face`,
    author: `InterOps`,
    contactScrollElementName: 'contactScrollName',
    defaultCurrency: "Euro",
    prices: {
      migration: {
        "DKK": 850,
        "Dollars": 130,
        "Euro": 115,
      },
      integration: {
        "DKK": 29500,
        "Dollars": 4280,
        "Euro": 3950,
      },
      monitoring: {
        "DKK": 9500,
        "Dollars": 1450,
        "Euro": 1275,
      }
    },
  },
  
  pathPrefix: '/wip',
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-170803699-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: false,
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Defers execution of google analytics script after page load
        defer: false,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-background-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-polyfill-io`,
      options: {
        features: [`fetch`, `Array.prototype.flat`, `Array.prototype.map`, `String.prototype.repeat`]
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `InterOps`,
        short_name: `InterOps`,
        start_url: `/`,
        background_color: `#2e96d3`,
        theme_color: `#2e96d3`,
        display: `minimal-ui`,
        icon: `src/images/interops-logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Barlow`,
            variants: [`400`, `600`, `700`]
          },
          {
            family: `Roboto`,
            variants: [`400`, `700`, `italic` ]
          },
        ],
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
