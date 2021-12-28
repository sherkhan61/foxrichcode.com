const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query pageLink {
      allStrapiArticles {
        nodes {
          strapiId
          link
        }
      }
    }

  `)

  data.allStrapiArticles.nodes.forEach(node => {
    actions.createPage({
      path: '/page/' + node.strapiId + '/' + node.link,
      component: path.resolve('./src/pages/page.js'),
      context: { strapiId: node.strapiId, link: node.link }
    })
  })

}