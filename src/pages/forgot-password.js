import React from "react"
import Seo from "../components/Seo"
import Header from "../components/Header"
import "../styles/SignIn.scss"
import { Link } from "gatsby"
import axios from "axios"



export default class ForgotPassword extends React.Component {
  handleSubmit = e => {
    e.preventDefault()

    const data = {
      email: this.email
    }

    axios.post('https://foxrichcode.com/auth/forgot-password', data)
      .then(response => {
        console.log('Your user received an email', console.log(response));
      })
      .catch(error => {
        console.log('An error occurred:', error.response);
      });

  }


  render() {
    return (
      <>
        <Header/>
        <Seo title={'Восстановление пароля - Foxrichcode.com'}/>
        <main className="main">
          <div className="main_container">
            <div className="container page-blog">
              <section className="blog-wrap blog-login">
                <header className="blog-header">
                  <h1 className="blog-title">Сброс пароля</h1>
                </header>
                <div className="blog-content">
                  <form onSubmit={this.handleSubmit} className="blog-form forgot-password">
                    <div className="blog-row">
                      <input type="email"
                             name="email"
                             className="blog-input-text"
                             placeholder="Введите ваш email"/>
                    </div>
                    <div className="blog-row">
                      <button className="blog-btn blog-btn-primary reset">
                        Отправить сброс на Email
                      </button>
                    </div>
                  </form>
                </div>
                <footer className="blog-footer">
                  <p>
                    <Link to={"/sign-in"}>Назад</Link>
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