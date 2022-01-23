import React from "react"
import "../../styles/index.scss"
import Header from "./Header"
import Footer from "./Footer"
import * as PropTypes from "prop-types"


export default function Layout(props) {

  let { children, user, setUser } = props
  return (
    <div className="layout">
      <Header user={user} setUser={setUser}/>
      <div className="content">
        {children}
      </div>
      <Footer/>
    </div>
  )
}

Layout.propTypes = { children: PropTypes.any }