import React from "react"
import Seo from "../components/Seo"
import Header from "../components/Header"
import "../styles/SignIn.scss"
import { Link } from "gatsby"
import axios from "axios"
import RedirectFunction from "../components/RedirectFunction"



export default class SignIn extends React.Component {
  state = {}


  handleSubmit = e => {
    e.preventDefault()
    const data = {
      identifier: this.identifier,
      password: this.password,
    }

    axios
      .post("https://foxrichcode.com/auth/local", data)
      .then(response => {
        localStorage.setItem('token', response.data.jwt)
        this.setState({
          isauthenticated: true
        })
        /*this.props.setUsers(response.data.users)*/
        // Handle success.
        console.log("Well done!")
        console.log("User profile", response.data.user)
        console.log("User token", response.data.jwt)
      })
      .catch(error => {
        // Handle error.
        console.log("An error occurred:", error.response)
      })
  }



  render() {
    if(this.state.isauthenticated) {
      return <RedirectFunction url={'/'} />
    }
    return (
      <>
        <Header/>
        <Seo title={'Войти в систему - Foxrichcode.com'}/>
        <main className="main">
          <div className="main_container">
            <div className="container page-blog">
              <section className="blog-wrap blog-login">
                <header className="blog-header">
                  <h1 className="blog-title">Войти</h1>
                </header>
                <div className="blog-content">
                  <form onSubmit={this.handleSubmit} className="blog-form login-form">
                    <div className="blog-row">
                      <input type="text"
                             name="text"
                             className="blog-input-text"
                             placeholder="имя пользователя или email"
                             onChange={e => this.identifier = e.target.value}/>
                    </div>
                    <div className="blog-row">
                      <input type="password"
                             name="password"
                             className="blog-input-password"
                             placeholder="пароль"
                             onChange={e => this.password = e.target.value}/>
                    </div>
                    <div className="blog-row">
                      <button className="blog-btn blog-btn-primary login">Вход</button>
                    </div>
                    <div className="blog-row">
                      <Link to={"/create-account"}>
                        <button className="blog-btn blog-btn-primary-alt create-account">
                          Создать аккаунт
                        </button>
                      </Link>
                    </div>
                  </form>
                </div>
                <footer className="blog-footer">
                  <p>
                    <Link to={"/forgot-password"}>Забыли пароль ?</Link>
                  </p>
                </footer>
              </section>
            </div>
          </div>
        </main>
      </>
    )
  }
}