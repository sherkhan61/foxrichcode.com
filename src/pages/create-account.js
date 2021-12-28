import React from "react"
import Seo from "../components/Seo"
import Header from "../components/Header"
import "../styles/SignIn.scss"
import { Link } from "gatsby"
import axios from "axios"
import RedirectFunction from "../components/RedirectFunction"



export default class CreateAccount extends React.Component {
  state = {}

  handleSubmit = e => {
    e.preventDefault()
    const data = {
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      password: this.password,
      username: this.username
    }


    axios
      .post('https://foxrichcode.com/auth/local/register', data)
      .then(response => {
        localStorage.setItem('token', response.data.jwt)
        this.setState({
          isauthenticated: true
        })
        // Handle success.
        console.log('Well done!');
        console.log('User profile', response.data.user);
        console.log('User token', response.data.jwt);
      })
      .catch(error => {
        // Handle error.
        console.log('An error occurred:', error.response);
      });
  }


render() {
  if(this.state.isauthenticated) {
    return <RedirectFunction url={'/'} />
  }
    return (
      <>
        <Header/>
        <Seo title={'Создать аккаунт - Foxrichcode.com'}/>
        <main className="main">
          <div className="main_container">
            <div className="container page-blog">
              <section className="blog-wrap blog-create">
                <header className="blog-header">
                  <h1 className="blog-title">Создать Аккаунт</h1>
                </header>
                <div className="blog-content">
                  <form onSubmit={this.handleSubmit} className="blog-form login-form">
                    <div className="blog-row">
                      <label htmlFor="email" className="blog-label">Email</label>
                      <input type="email"
                             id="email"
                             name="email"
                             className="blog-input-text"
                             placeholder="Введите ваш email"
                             autoComplete="off"
                             onChange={e => this.email = e.target.value}/>
                    </div>
                    <div className="blog-row">
                      <label htmlFor="password" className="blog-label">Пароль</label>
                      <input type="password"
                             id="password"
                             name="password"
                             className="blog-input-password"
                             placeholder="Введите ваш пароль"
                             autoComplete="off"
                             onChange={e => this.password = e.target.value}/>
                    </div>
                    <div className="blog-row">
                      <label htmlFor="firsName" className="blog-label">Имя</label>
                      <input type="text"
                             id="firstName"
                             name="firstName"
                             className="blog-input-text"
                             placeholder="Имя"
                             autoComplete="off"
                             onChange={e => this.firstname = e.target.value}/>
                    </div>
                    <div className="blog-row">
                      <label htmlFor="lastName" className="blog-label">Фамилия</label>
                      <input type="text"
                             id="lastName"
                             name="lastName"
                             className="blog-input-text"
                             placeholder="Фамилия"
                             autoComplete="off"
                             onChange={e => this.lastname = e.target.value}/>
                    </div>
                    <div className="blog-row">
                      <label htmlFor="userName" className="blog-label">Имя аккаунта</label>
                      <input type="text"
                             id="userName"
                             name="userName"
                             className="blog-input-text"
                             placeholder="Имя аккаунта"
                             autoComplete="off"
                             onChange={e => this.username = e.target.value}/>
                    </div>
                    <div className="blog-checkbox-row">
                      <label className="blog-label">
                        <input type="checkbox"
                               name="tos"
                               className="blog-input-checkbox"/>
                        <span>
                        Я прочитал и согласен с <Link to={"/"}>Условием использования</Link> и <Link to={"/"}>Политикой конфиденциальности</Link>
                      </span>
                      </label>
                    </div>
                    <div className="blog-row">
                      <button className="blog-btn blog-btn-primary login">Создать аккаунт</button>
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