import React from 'react';
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import { graphql, Link, useStaticQuery } from "gatsby"
import { Partners } from "../Partners"
import MobileBigBlock from "./MobileBigBlock"
import MobileListBlocks from "./MobileListBlocks"
import HomeIcon from "@material-ui/icons/Home"


export const Mobile = () => {
  const query = useStaticQuery(
    graphql`
      query mobilePage {
        allStrapiCategories {
          edges {
            node {
              strapiId
              name
              alt
              articles {
                id
                title
                link
                date
                media {
                  url
                  name
                }
                description
              }
            }
          }
        }
      }
    `
  )

  const categories = query.allStrapiCategories.edges

  return (
    <div className="main_container">
      <div className="container">
        <div className="row breadcrumb">
          <div className="col-lg-8">
            <Breadcrumbs aria-label="breadcrumb">
              <Link color="inherit" to={'/'}>
                <Typography color="textPrimary">
                  <HomeIcon className="breadcrumb-link" />
                  <span className="breadcrumb-link">Главная</span>
                </Typography>
              </Link>
              <Typography color="textPrimary">
                <span className="pl-0">Категории</span>
              </Typography>
              <Typography color="textPrimary">
                <span className="pl-0">Мобильная разработка</span>
              </Typography>
            </Breadcrumbs>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 blog_content">
            <MobileBigBlock categories={categories} />
          </div>
          <aside className="col-lg-4 sidebar">
            <Partners />
          </aside>
        </div>
        <div className="row mt-5">
          <div className="col-lg-8">
            <MobileListBlocks categories={categories} />
          </div>
        </div>
      </div>
    </div>
  );
}

