import React, { useState, useEffect } from "react"
import "../styles/index.scss"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Preloader } from "./Preloader"
import * as PropTypes from "prop-types"



export default function Layout(props) {
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 400)
  }, [])

  let { children, user, setUser } = props
  return (
    <div className="layout">
      <Header user={user} setUser={setUser}/>
      {loader
        ? <Preloader/>
        :
          <div className="content">
            {children}
          </div>
      }
      <Footer/>
    </div>
  )
}

Layout.propTypes = { children: PropTypes.any }