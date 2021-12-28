import * as React from "react"
import "../styles/index.scss"
import Header from "../components/Header"
import Footer from "../components/Footer"
import * as PropTypes from "prop-types"

export default class Layout extends React.Component {
  render() {
    let { children, user, setUser } = this.props
    return (
      <div className="layout">
        <Header user={user} setUser={setUser} />
        <div className="content">
          {children}
        </div>
        <Footer/>
      </div>
    )
  }
}

Layout.propTypes = { children: PropTypes.any }