import React from "react"
import "../../styles/main/Sections.scss"
import { Link } from "gatsby"
import * as _ from "lodash"
import moment from "moment"

const CyberSection = ({ categories }) => {

  let cyberObject = categories.find((_o) => _o.node.strapiId === 3)
  let cyberArray = cyberObject.node.articles

  let sortedCyberReviews = _.sortBy(cyberArray, function(o) {
    return moment(o.date)
  })
    .reverse()

  return (
    <>
      <section className="section">
        <header className="section-header section-header--with-border">
          <h2 className="section-header__title section-header__title--large">
            <Link to="/cyber-security">Кибербезопасность</Link>
          </h2>
          <Link to="/cyber-security" className="link-more section-header__link-more">
            <span className="link-more__title">Больше</span>
          </Link>
        </header>
        <ul className="section__content section__content--medium-without-indent">
          {sortedCyberReviews.slice(0, 4).map(a => {
            return (
              <li className="block-article block-article--secondary" key={a.id}>
                <article className="block-article__content">
                  <Link to={`/page/${a.id}/${a.link}`}
                        className="article-preview-mixed
                                   article-preview-mixed--third
                                   article-preview-mixed--with-absolute-secondary-item">
                    <div className="article-preview-mixed__image">
                      <div className="post-preview-media">
                        <img
                          src={a.media.url}
                          alt={a.media.name} className="post-preview-media__picture" />
                      </div>
                    </div>
                    <div className="article-preview-mixed__content">
                      <div className="info-header-heading">
                        <span className="eyebrow">
                          {cyberObject.name}
                        </span>
                      </div>
                      <h3 className="preview-title preview-title--medium">{a.title}</h3>
                      <time className="preview-info-item-secondary">{a.date}</time>
                    </div>
                  </Link>
                </article>
              </li>
            )
          })}
        </ul>
      </section>
    </>
  )
}

export default CyberSection