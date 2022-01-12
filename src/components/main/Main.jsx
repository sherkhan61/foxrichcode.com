import * as React from "react"
import Typography from "@material-ui/core/Typography"
import { graphql, useStaticQuery } from "gatsby"
import BigBlock from "./BigBlock"
import { Partners } from "../Partners"
import ListBlocks from "./ListBlocks"
import CategoriesSections from "./CategoriesSections"
import HomeIcon from "@material-ui/icons/Home"


const Main = () => {
  const query = useStaticQuery(
    graphql`
      query MyQuery {
      allStrapiArticles(sort: {fields: date, order: DESC}) {
        edges {
          node {
            strapiId
            title
            link
            date
            category {
              id
              name
              alt
            }
            media {
              name
              url
            }
            description
          }
        }
      }
    }
    `
  )

  const reviews = query.allStrapiArticles.edges

  return (
    <div className="main_container">
      <div className="container">
        <div className="row breadcrumb">
          <div className="col-lg-8">
            <Typography color="textPrimary">
              <HomeIcon width="20px" height="20px" />
              <span>Главная</span>
            </Typography>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 blog_content">
            <BigBlock reviews={reviews} />
          </div>
          <aside className="col-lg-4 sidebar">
            <Partners />
          </aside>
        </div>
        <div className="row mt-5">
          <div className="col-lg-8">
            <ListBlocks reviews={reviews} />
          </div>
        </div>
        <div className="row mt-5">
          <CategoriesSections />
        </div>
      </div>
    </div>
  )
}

export default Main
