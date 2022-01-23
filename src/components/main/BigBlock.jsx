import React from "react"
import "../../styles/main/BigBlock.scss"
import CalendarTodayIcon from "@material-ui/icons/CalendarToday"
import { Link } from "gatsby"


const BigBlock = ({ reviews }) => {

  return (
    <>
      <div className="content has-hero">
        <div className="content-blocks">
          {reviews.slice(0, 1).map(d => {
            return (
              <article className="article" key={d.node.strapiId}>
                <div className="m">
                  <Link to={`/page/${d.node.strapiId}/${d.node.link}`}>
                    <picture>
                      < img
                        src={d.node.media.url}
                        alt={d.node.media.name}
                        width="788" height="447px" />
                    </picture>
                  </Link>
                </div>
                <div className="info">
                  <header className="info-header">
                    <div className="info-header-heading">
                      <span className="eyebrow">
                        <Link
                          to={`/${d.node.category.alt}`}>{d.node.category.name}
                        </Link>
                      </span>
                    </div>
                    <div className="time">
                      <CalendarTodayIcon/>
                      <span>{d.node.date}</span>
                    </div>
                    <h2 className="title title-color-default">
                      <Link to={`/page/${d.node.strapiId}/${d.node.link}`}>
                        {d.node.title}
                      </Link>
                    </h2>
                  </header>
                </div>
              </article>
            )
          })}
        </div>
      </div>
      <div className="content">
        <div className="content-blocks">
          {reviews.slice(1, 10).map(a => {
            return (
              <div className="col-md-6" key={a.node.strapiId}>
                <article className="article">
                  <div className="m">
                    <Link to={`/page/${a.node.strapiId}/${a.node.link}`}>
                      <picture>
                        <img
                          src={a.node.media.url}
                          alt={a.node.media.name}
                          width="252px" height="130px" />
                      </picture>
                    </Link>
                  </div>
                  <div className="info">
                    <header className="info-header">
                      <div className="info-header-heading">
                        <span className="eyebrow">
                          <Link
                            to={`/${a.node.category.alt}`}>{a.node.category.name}
                          </Link>
                        </span>
                      </div>
                      <div className="time">
                        <CalendarTodayIcon/>
                        <span>{a.node.date}</span>
                      </div>
                      <h2 className="title title-color-default">
                        <Link to={`/page/${a.node.strapiId}/${a.node.link}`}>
                          {a.node.title}
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
    </>

  )
}

export default BigBlock