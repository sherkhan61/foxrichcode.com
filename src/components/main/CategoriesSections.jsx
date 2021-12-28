import * as React from "react";
import "../../styles/main/CategoriesSections.scss"
import WebSection from "./WebSection"
import { graphql, useStaticQuery } from "gatsby"
import MobileSection from "./MobileSection"
import CyberSection from "./CyberSection"
import AiSection from "./AiSection"


const CategoriesSections = () => {
  const query = useStaticQuery(
    graphql`
      query categories {
        allStrapiCategories(sort: {fields: strapiId}) {
          edges {
            node {
              strapiId
              name
              alt
              articles {
                title
                link
                date
                id
                media {
                  name
                  url
                }
              }
            }
          }
        }
      }

    `
  )
  const categories = query.allStrapiCategories.edges

  return (
    <>
      <WebSection categories={categories} />
      <MobileSection categories={categories} />
      <CyberSection categories={categories} />
      <AiSection categories={categories} />
    </>
  )
}

export default CategoriesSections

