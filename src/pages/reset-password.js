import React from "react"
import RedirectFunction from "../components/RedirectFunction"
import Header from "../components/Header"
import Seo from "../components/Seo"
import axios from 'axios';



export default class ResetPassword extends React.Component {
  state = {}

  handleSubmit = e => {
    e.preventDefault()

    const data = {
      code: '',
      password: this.password,
      passwordConfirmation: this.passwordConfirmation,
    }

    axios.post('https://foxrichcode.com/auth/reset-password', data)
      .then(response => {
        console.log("Your user's password has been reset.", console.log(response));
        this.setState({
          reset: true
        })
      })
      .catch(error => {
        console.log('An error occurred:', error.response);
      });
  }

  render() {
    if(this.state.reset) {
      return <RedirectFunction url={'/sign-in'}/>
    }


    return (
      <>
        <Header/>
        <Seo title={'Сброс пароля - Foxrichcode.com'}/>
        <main className="main">
          <div className="main_container">
            <div className="container page-blog">
              <section className="blog-wrap blog-login">
                <header className="blog-header">
                  <h1 className="blog-title">Сброс пароля</h1>
                </header>
                <div className="blog-content">
                  <form onSubmit={this.handleSubmit} className="blog-form login-form">
                    <div className="blog-row">
                      <input type="password"
                             name="password"
                             className="blog-input-password"
                             placeholder="пароль"
                             onChange={e => this.password = e.target.value}/>
                    </div>
                    <div className="blog-row">
                      <input type="password"
                             name="password"
                             className="blog-input-password"
                             placeholder="подтвердить пароль"
                             onChange={e => this.passwordConfirmation = e.target.value}/>
                    </div>
                    <div className="blog-row">
                      <button className="blog-btn blog-btn-primary login">Сохранить</button>
                    </div>
                  </form>
                </div>
              </section>
            </div>
          </div>
        </main>
      </>
    )
  }
}