import * as React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"




function Seo({ description, keywords, title, url }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const metaTitle = title || site.siteMetadata.title
  const metaKeywords = keywords || [
    "программирование",
    "веб разработка",
    "мобильная разработка",
    "кибербезопасность",
    "искусственный интеллект",
    "Javascript",
    "React", "Node.js",
    "php", "хостинг",
    "Frontend", "Backend",
    "Cyber security",
    "Artificial intelligence",
  ]
  const metaUrl = url || site.siteMetadata.url

  return (
    <Helmet
      title={title}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          property: `og:url`,
          content: metaUrl
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:title`,
          content: metaTitle
        },
        {
          name: `twitter:description`,
          content: metaDescription
        }
      ].concat(
        metaKeywords && metaKeywords.length > 0
          ? {
            name: `keywords`,
            content: metaKeywords.join(`, `)
          }
          : []
      )}
    />
  )
}

export default Seo
