
module.exports = {
  siteMetadata: {
    title: "Foxrichcode | Программирование, кибербезопасность и искусственный интеллект",
    description: "A simple blog built with Gatsby and Strapi",
    siteUrl: `https://foxrichcode.com`,
  },
  plugins: [`gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://api-foxrichcode.herokuapp.com`,
        queryLimit: 1000, // Defaults to 100
        collectionTypes: [`articles`, `categories`],
        loginData: {
          identifier: 'sherkhan61',
          password: 'Astana2021!',
        },
      },
    },
  ],
}
