import React from "react"
import * as classes from "../../styles/mobile/MobileBigBlock.module.scss"
import AccessTimeIcon from "@material-ui/icons/AccessTime"
import { Link } from "gatsby"
import * as _ from "lodash"
import moment from "moment"


const MobileBigBlock = ({ categories }) => {

  let webObject = categories.find((_o) => _o.node.strapiId === 2)
  let webArray = webObject.node.articles
  let sortedReviews = _.sortBy(webArray, function(o) {
    return moment(o.date)
  })
    .reverse()

  return (
    <>
      <div className={`${classes.collection} ${classes.collectionHomePageBlock}`}>
        <div className={classes.content}>
          {sortedReviews.slice(0, 1).map(d => {
            return (
              <article className={`${classes.article} ${classes.featuredPrimary}`} key={d.id}>
                <div className={classes.m}>
                  <Link to={`/page/${d.id}/${d.link}`}>
                    <picture>
                      <img
                        src={d.media.url}
                        alt=""/>
                    </picture>
                  </Link>
                </div>
                <div className={classes.info}>
                  <header className={classes.infoHeader}>
                    <div className={classes.time}>
                      <AccessTimeIcon/>
                      <span>{d.date}</span>
                    </div>
                    <h2 className={classes.title}>
                      <Link to={`/page/${d.id}/${d.link}`}>
                        {d.title}
                      </Link>
                    </h2>
                  </header>
                </div>
              </article>
            )
          })}
          {sortedReviews.slice(1, 4).map(d => {
            return (
              <article className={`${classes.article}`} key={d.id}>
                <div className={classes.m}>
                  <Link to={`/page/${d.id}/${d.link}`}>
                    <picture>
                      <img
                        src={d.media.url}
                        alt=""/>
                    </picture>
                  </Link>
                </div>
                <div className={classes.info}>
                  <header className={classes.infoHeader}>
                    <div className={classes.time}>
                      <AccessTimeIcon/>
                      <span>{d.date}</span>
                    </div>
                    <h3 className={classes.title}>
                      <Link to={`/page/${d.id}/${d.link}`}>
                        {d.title}
                      </Link>
                    </h3>
                  </header>
                </div>
              </article>
            )
          })}
        </div>
        <div className="content">
          <div className="content-blocks">
            {sortedReviews.slice(4, 13).map(a => {
              return (
                <div className="col-md-6" key={a.id}>
                  <article className="article">
                    <div className="m">
                      <Link to={`/page/${a.id}/${a.link}`}>
                        <picture>
                          <img
                            src={a.media.url}
                            alt=""/>
                        </picture>
                      </Link>
                    </div>
                    <div className="info">
                      <header className="info-header">
                        <div className="time">
                          <AccessTimeIcon/>
                          <span>{a.date}</span>
                        </div>
                        <h2 className="title title-color-default">
                          <Link to={`/page/${a.id}/${a.link}`}>
                            {a.title}
                          </Link>
                        </h2>
                      </header>
                    </div>
                  </article>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>

  )
}

export default MobileBigBlock