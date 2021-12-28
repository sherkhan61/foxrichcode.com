import * as React from "react"
import "../styles/index.scss"
import Layout from "../components/Layout"
import Main from "../components/main/Main"
import Scroll from "../components/Scroll"
import Seo from "../components/Seo"
import axios from "axios"


export default class Home extends React.Component {
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
        <Seo title={'Сайт по программированию и кибербезопасности - Foxrichcode.com'}/>
        <main className="main">
          <Main/>
          <Scroll showBelow={250}/>
        </main>
      </Layout>
    )
  }
}

