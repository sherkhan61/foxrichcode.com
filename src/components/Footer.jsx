import * as React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import "../styles/Footer.scss"


const Footer = () => {
  const query = useStaticQuery(
    graphql`
      query logoImg {
        file(relativePath: {eq: "logo.png"}) {
          publicURL
        }
      }

  `)

  const logo = query.file.publicURL

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-lower">
          <div className="brand">
            <Link to="/">
              <img src={logo} alt="logo"/>
            </Link>
          </div>
          <div className="legal">
            <div className="copyright">
              <p>Copyright © 2021 Foxrichcode.com. <Link to="/contacts">Контакты</Link>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer