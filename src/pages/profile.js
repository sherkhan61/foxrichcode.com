import React from "react"
import Seo from "../components/Seo"
import "../styles/information/information.scss"
import { Link } from "gatsby"
import Layout from "../components/ui/Layout"
import axios from "axios"
import { ProfileInfo } from "../components/profile/ProfileInfo"


export default class Profile extends React.Component {
  state = {}

  componentDidMount() {
    const token = localStorage.getItem('token')
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }

    axios.get(`https://api-foxrichcode.herokuapp.com/users/me`, config)
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
        <Seo title="Профиль"/>
        <main className="main">
          <div className="main_container">
            <div className="container">
              <div className="information">
                <h2>Профиль пользователя</h2>
                <ProfileInfo user={this.state.user}/>
                <p></p>
                <p>
                  <Link to={"/"}>Вернуться на главную</Link>
                </p>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    )
  }
}