import React from "react";
import { graphql, useStaticQuery } from "gatsby"
import "../styles/Sidebar.scss"

export const Partners = () => {

  const query = useStaticQuery(
    graphql`
      query img {
        hosting: file(relativePath: {eq: "hosting.jpg"}) {
          publicURL
        }
        constructor: file(relativePath: {eq: "constructor.jpg"}) {
          publicURL
        }
        site: file(relativePath: {eq: "site.png"}) {
          publicURL
        }
        youtube: file(relativePath: {eq: "youtube.jpg"}) {
          publicURL
        }
        pinterest: file(relativePath: {eq: "pinterest.jpg"}) {
          publicURL
        }  
      }
    `)

  const hosting = query.hosting.publicURL
  const constructor = query.constructor.publicURL
  const site = query.site.publicURL
  const youtube = query.youtube.publicURL
  const pinterest = query.pinterest.publicURL

  const [partners] = React.useState([
    {
      id: 1,
      name: "hosting",
      title: "Самый быстрый хостинг, бесплатное доменное имя, SSL-сертификат и почта",
      url: "https://timeweb.com/ru/?i=81735&a=115",
      image: hosting,
    },
    {
      id: 2,
      name: "constructor",
      title: "Конструктор сайта – соберите из готовых блоков, используйте профессиональные шаблоны или придумайте дизайн с нуля",
      url: "https://timeweb.com/ru/?i=81735&a=166",
      image: constructor,
    },
    {
      id: 3,
      name: "website course",
      title: "Бесплатный курс по созданию, продвижению и монетизации сайтов",
      url: "https://ifish2.ru/infofree/?utm_source=partner&utm_medium=cpc&utm_campaign=sherkhan61",
      image: site,
    },
    {
      id: 4,
      name: "youtube course",
      title: "Бесплатный курс \"Как зароботать на YouTube\"",
      url: "https://boshnikov.ru/free/?utm_source=partner&utm_medium=cpc&utm_campaign=sherkhan61",
      image: youtube,
    },
    {
      id: 5,
      name: "pinterest course",
      title: "Бесплатный курс \"Продвижение в Pinterest\"",
      url: "https://ifish2.ru/pinterest/?utm_source=partner&utm_medium=cpc&utm_campaign=sherkhan61",
      image: pinterest,
    },
  ]);


  return (
    <aside className="widget widget_popular_posts">
      <div className="widget-title-block">
        <p className="widget-title">Реклама</p>
      </div>
      <ul className="post-list-small post-list-small--1">
        {partners.map((info) => (
          <li className="post-list-small__item" key={info.id}>
            <article className="post-list-small__entry">
              <div className="post-list-small__img-holder">
                <div className="thumb-container">
                  <a target="_blank" rel="noopener noreferrer"
                     href={info.url}>
                    <img
                      src={info.image}
                      alt={info.name}/>
                  </a>
                </div>
              </div>
              <div className="post-list-small__body">
                <div className="info-header-heading">
                  <span className="eyebrow">
                    Реклама
                  </span>
                </div>
                <h2 className="post-list-small__entry-title">
                  <a target="_blank" rel="noopener noreferrer"
                     href={info.url}>
                    {info.title}
                  </a>
                </h2>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </aside>
  )
}