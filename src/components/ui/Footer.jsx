import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import "../../styles/ui/Footer.scss"
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';

const Footer = () => {

  const icons = useStaticQuery(
    graphql`
      query icons {
        logo: file(relativePath: {eq: "logo.png"}) {
          publicURL
        }
        apple: file(relativePath: {eq: "app-store.svg"}) {
          publicURL
        }
        google: file(relativePath: {eq: "google-play.svg"}) {
          publicURL
        }
      }
  `)

  const logo = icons.logo.publicURL
  const apple = icons.apple.publicURL
  const google = icons.google.publicURL

  return (
    <footer className="bottom-nav">
      <div className="bottom-nav__reducer">
        <div className="bottom-nav__buttons nav-buttons">
          <img src={logo} alt="logo" className="white-logo"
               loading="lazy" width="131px" height="47px"/>
          <ul className="bottom-nav__buttons-wrapper">
            <li>
              <a href="#" className="bottom-nav__button bottom-nav__buttons-feedback"
                 rel="noopener nofollow" target="_blank">Напишите, что Вы думаете о FOXRICHCODE.COM
              </a>
            </li>
            <li>
              <a href="#" className="bottom-nav__button bottom-nav__buttons-advert"
                 rel="noopener nofollow" target="_blank">Рекламодателям
              </a>
            </li>
          </ul>
        </div>
        <div className="bottom-nav__columns-list nav-column-list">
          <nav className="list-container--column list-container--column-border">
            <h2 className="subheader">О нас</h2>
            <ul>
              <li>
                <h3>
                  <a href="#" className="bottom-nav__link bottom-nav__link-spacing"
                     rel="noopener nofollow" target="_blank">О проекте</a>
                </h3>
              </li>
              <li>
                <h3>
                  <a href="#" className="bottom-nav__link bottom-nav__link-spacing"
                     rel="noopener nofollow" target="_blank">Наши авторы</a>
                </h3>
              </li>
              <li>
                <h3>
                  <a href="#" className="bottom-nav__link bottom-nav__link-spacing"
                     rel="noopener nofollow" target="_blank">Как мы работаем</a>
                </h3>
              </li>
              <li>
                <h3>
                  <a href="" className="bottom-nav__link bottom-nav__link-spacing"
                     rel="noopener nofollow" target="_blank">Наши принципы</a>
                </h3>
              </li>
              <li>
                <h3>
                  <a href="" className="bottom-nav__link bottom-nav__link-spacing"
                     rel="noopener nofollow" target="_blank">Архивы новостей</a>
                </h3>
              </li>
            </ul>
          </nav>
          <nav className="list-container--column list-container--column-border">
            <h2 className="subheader">Условия пользования</h2>
            <ul>
              <li>
                <h3>
                  <a href="" className="bottom-nav__link bottom-nav__link-spacing"
                     rel="noopener nofollow" target="_blank">Правила использования материалов</a>
                </h3>
              </li>
              <li>
                <h3>
                  <a href="" className="bottom-nav__link bottom-nav__link-spacing"
                     rel="noopener nofollow" target="_blank">Пользовательское соглашение</a>
                </h3>
              </li>
              <li>
                <h3>
                  <a href="" className="bottom-nav__link bottom-nav__link-spacing"
                     rel="noopener nofollow" target="_blank">Политика конфеденциальности</a>
                </h3>
              </li>
              <li>
                <h3>
                  <a href="" className="bottom-nav__link bottom-nav__link-spacing"
                     rel="noopener nofollow" target="_blank">Правила комментирования</a>
                </h3>
              </li>
            </ul>
          </nav>
          <div className="list-container--column">
            <nav className="list-container--column-border">
              <h2 className="subheader">Редакция</h2>
              <ul>
                <li className="list-item">
                  <a href="mailto:feedback@foxrichcode.com" className="bottom-nav__link bottom-nav__link-spacing">feedback@foxrichcode.com</a>
                </li>
              </ul>
            </nav>
            <nav className="list-container--column-border list-container--column-offset">
              <h2 className="subheader">Главный офис</h2>
              <ul>
                <li className="list-item">
                  <a href="tel:+77777741361" className="bottom-nav__link bottom-nav__link-spacing">+7 777 774 13 61</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="bottom-nav__social nav-social">
          <nav>
            <h2 className="subheader">Мы в социальных сетях</h2>
            <ul className="bottom-nav__social-list">
              <li>
                <a href="" className="bottom-nav__link">
                  <InstagramIcon width="35px" height="35px" className="lazyloaded"/>
                </a>
              </li>
              <li>
                <a href="" className="bottom-nav__link">
                  <FacebookIcon width="35px" height="35px" className="lazyloaded"/>
                </a>
              </li>
              <li>
                <a href="" className="bottom-nav__link">
                  <YouTubeIcon width="35px" height="35px" className="lazyloaded"/>
                </a>
              </li>
            </ul>
          </nav>
          <nav className="mobile-download-links">
            <h2 className="subheader">Мобильное приложение Foxrichcode.com</h2>
            <ul className="mobile-download-links__list">
              <li>
                <a href="" className="mobile-download-links__item mobile-download-links__item--app-store">
                  <img src={apple} alt="apple-icon"
                       className="mobile-download-links__icon lazyloaded"
                       width="120px" height="40px" />
                </a>
              </li>
              <li>
                <a href="" className="mobile-download-links__item mobile-download-links__item--app-store">
                  <img src={google} alt="google-play-icon"
                       className="mobile-download-links__icon lazyloaded"
                       width="120px" height="40px"/>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="bottom-nav__text-wrapper nav-text">
        <div className="bottom-nav__text">
          <small className="bottom-nav__permissions">
            © FOXRICHCODE.COM 2021-2022. Все права защищены
          </small>
        </div>
      </div>
    </footer>
  )
}

export default Footer