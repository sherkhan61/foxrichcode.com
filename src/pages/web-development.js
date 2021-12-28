import React from "react"
import Layout from "../components/Layout"
import { Web } from "../components/web/Web"
import Scroll from "../components/Scroll"
import Seo from "../components/Seo"
import axios from "axios"


class WebPage extends React.Component {
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
        <Seo title={'Веб разработка - Foxrichcode.com'}/>
        <main className="main">
          <Web/>
          <Scroll showBelow={250}/>
        </main>
      </Layout>
    )
  }
}

export default WebPage