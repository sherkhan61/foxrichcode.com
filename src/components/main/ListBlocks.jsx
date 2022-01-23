import React, { useState } from "react"
import "../../styles/main/ListBlocks.scss"
import CalendarTodayIcon from "@material-ui/icons/CalendarToday"
import { Link } from "gatsby"


const ListBlocks = ({ reviews }) => {
  const [visible, setVisible] = useState(30)

  const loadMoreReviews = () => {
    setVisible((prevValue) => prevValue + 5)
  }

  return (
    <>
      <div className="main_secondary">
        <div className="content-article-list">
          <div className="content article-list">
            {reviews.slice(10, visible).map(p => {
              return (
                <article className="article" key={p.node.strapiId}>
                  <div className="m">
                    <Link to={`/page/${p.node.strapiId}/${p.node.link}`}>
                      <picture>
                          <img
                            src={p.node.media.url}
                            alt={p.node.media.name}/>
                      </picture>
                    </Link>
                  </div>
                  <div className="info">
                    <header className="info-header">
                      <div className="info-header-heading">
                        <span className="eyebrow">
                          <Link
                            to={`/${p.node.category.alt}`}>{p.node.category.name}
                          </Link>
                        </span>
                      </div>
                      <div className="time">
                        <CalendarTodayIcon/>
                        <span>{p.node.date}</span>
                      </div>
                      <h2 className="title title-color-default">
                        <Link to={`/page/${p.node.strapiId}/${p.node.link}`}>{p.node.title}</Link>
                      </h2>
                    </header>
                  </div>
                </article>
              )
            })}
          </div>
          <button className="load-more" onClick={loadMoreReviews}>показать больше</button>
        </div>
      </div>
    </>
  )
}

export default ListBlocks