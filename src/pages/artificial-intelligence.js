import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Scroll from "../components/Scroll"
import Ai from "../components/ai/Ai"
import axios from "axios"


class AIPage extends React.Component {
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
        <Seo title={'Искусственный интеллект - Foxrichcode.com'} />
        <main className="main">
          <Ai/>
          <Scroll showBelow={250}/>
        </main>
      </Layout>
    )
  }
}

export default AIPage