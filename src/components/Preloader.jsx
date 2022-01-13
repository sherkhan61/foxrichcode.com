import React from 'react'
import '../styles/Preloader.scss'


export const Preloader = () => {
  return (
    <div id="loader-wrapper" className="cssload_loader">
      <div className="cssload_inner cssload_one"></div>
      <div className="cssload_inner cssload_two"></div>
      <div className="cssload_inner cssload_three"></div>
    </div>
  )
}

