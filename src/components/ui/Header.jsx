import * as React from "react"
import { useState } from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import MenuIcon from "@material-ui/icons/Menu"
import CloseIcon from "@material-ui/icons/Close"
import "../../styles/ui/Header.scss"
import PersonIcon from "@material-ui/icons/Person"
import { MenuListComposition } from "./Menu"
import HomeIcon from "@material-ui/icons/Home"
import WebIcon from "@material-ui/icons/Web"
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone"
import SecurityIcon from "@material-ui/icons/Security"
import MemoryIcon from "@material-ui/icons/Memory"


const Header = ({ user, setUser }) => {
  const [state, setState] = useState("isOpen")

  const handleToggle = () => {
    setState({
      isOpen: !state.isOpen
    })
  }


  const query = useStaticQuery(
    graphql`
      query logo {
        file(relativePath: {eq: "logo.png"}) {
          publicURL
        }
      }

  `)

  const logo = query.file.publicURL

  let buttons
  if (user) {
    buttons = (
      <div className="user_item">
        <MenuListComposition user={user} setUser={setUser}/>
      </div>
    )
  } else {
    buttons = (
      <div className="user_item">
        <Link to={"/sign-in"}>
          <button>
            <PersonIcon width="16px" height="16px"/>
            <span>Войти</span>
          </button>
        </Link>
      </div>
    )
  }

  return (
    <>
      <div className={state.isOpen ? "content-overlay content-overlay--is-visible" : "content-overlay"}></div>
      <header className="header">
        <div className="header--sticky sticky scrolling">
          <div className="container">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="logo" width="160px" height="57px"/>
              </Link>
            </div>
          </div>
          <div className="top_header_background">
            <div className="container">
              <div className="top_header_inner"></div>
            </div>
          </div>
          <div className="container">
            <div className="header_inner">
              <div className="header_left">
                <div className="side-menu-button">
                  <button className="sidenav__open-button" type="button" onClick={handleToggle}>
                    <MenuIcon width="28px" height="28px" className="sidenav__open-icon"/>
                  </button>
                </div>
                <nav className="d-none d-lg-block">
                  <ul className="nav_list">
                    <li className="nav_item">
                      <Link activeClassName="active" to="/web-development">Веб разработка</Link>
                    </li>
                    <li className="nav_item">
                      <Link activeClassName="active"
                            to="/mobile-development">Мобильная разработка</Link>
                    </li>
                    <li className="nav_item">
                      <Link activeClassName="active" to="/cyber-security">Кибербезопасность</Link>
                    </li>
                    <li className="nav_item">
                      <Link activeClassName="active" to="/artificial-intelligence">Искусственный интеллект</Link>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="header_right">
                {buttons}
                {/*<div className="search-block">
                  <div className="search-icon">
                    <SearchIcon/>
                  </div>
                  <div className="search-input">
                    <input aria-label="search" placeholder="Search…" type="text"/>
                  </div>
                </div>*/}
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className={state.isOpen ? "sidenav sidenav--is-open" : "sidenav"}>
        <div className="sidenav-logo">
          <img src={logo} alt="logo" width="140px" height="57px" />
        </div>
        <div className="sidenav__close">
          <button className="sidenav__close-button" type="button" onClick={handleToggle}>
            <CloseIcon width="22px" height="22px" className="sidenav__close-icon"/>
          </button>
        </div>
        <nav className="sidenav__menu-container">
          <h1>Категории</h1>
          <ul className="sidenav__menu">
            <li className="menu-item">
              <Link to="/">
                <HomeIcon width="20px" height="20px"/>
                <span>Главная</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/web-development">
                <WebIcon width="20px" height="20px"/>
                <span>Веб разработка</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/mobile-development">
                <PhoneIphoneIcon width="20px" height="20px"/>
                <span>Мобильная разработка</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/cyber-security">
                <SecurityIcon width="20px" height="20px"/>
                <span>Кибербезопасность</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/artificial-intelligence">
                <MemoryIcon width="20px" height="20px"/>
                <span>Искусственный интеллект</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}


export default Header
