import React from "react"
import Layout from "../components/Layout"
import Scroll from "../components/Scroll"
import { Mobile } from "../components/mobile/Mobile"
import Seo from "../components/Seo"
import axios from "axios"


class MobilePage extends React.Component {
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
        <Seo title={'Мобильная разработка - Foxrichcode.com'}/>
        <main className="main">
          <Mobile/>
          <Scroll showBelow={250}/>
        </main>
      </Layout>
    )
  }
}

export default MobilePage