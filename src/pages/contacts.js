import React from "react"
import "../styles/contacts/Contacts.scss"
import Button from "@material-ui/core/Button"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import axios from "axios"


class Contact extends React.Component {
  state = {}

  componentDidMount() {
    const token = localStorage.getItem('token')
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }

    axios.get(`https://foxrichcode.com/users/me`, config)
      .then(response => {
          this.setUser(response.data)
        },
        error => {
          console.log(error)
        })
  }

  setUser = user => {
    this.setState({
      user: user
    })
  }

  render() {
    return (
      <Layout user={this.state.user} setUser={this.setUser}>
        <Seo title={'Контакты - Foxrichcode.com'}/>
        <div className="main_container">
          <div className="container">
            <h1 className="contacts-title">Контакты</h1>
            <h4 className="contacts-description">Если у вас возникли какие-либо проблемы с сервисом, пожалуйста, сообщите нам об этом</h4>
            <div className="contacts_container">
              <div className="contacts-left">
                <div className="contacts-block contacts-support">
                  <h4>Поддержка пользователей</h4>
                  <div className="support-email">
                    <a href="mailto:feedback@foxrichcode.com">feedback@foxrichcode.com</a>
                  </div>
                </div>
                <div className="contacts-block contacts-partnership">
                  <h4>Сотрудничество</h4>
                  <p>Вы можете предложить партнерские проекты, размещать рекламу в foxrichcode.com или предлагать свой контент</p>
                </div>
              </div>
              <div className="contacts-right">
                <div className="contacts-block contacts-form">
                  <h4>Обратная связь</h4>
                  <form action="" className="form">
                    <div className="form-group">
                      <input type="text" name="name" className="form-control" placeholder="Ваше имя"/>
                      <div className="form-error"></div>
                    </div>
                    <div className="form-group">
                      <input type="text" name="email" className="form-control" placeholder="Ваш email"/>
                      <div className="form-error"></div>
                    </div>
                    <div className="form-group contacts-form-message">
                      <textarea name="message" className="form-control" placeholder="Сообщение"></textarea>
                      <div className="form-error"></div>
                    </div>
                    <div className="form-action">
                      <Button variant="contained" type="submit" color="primary">Отправить</Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Contact