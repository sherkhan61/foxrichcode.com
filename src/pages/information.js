import React from "react"
import Seo from "../components/Seo"
import "../styles/information/information.scss"
import { Link } from "gatsby"
import Layout from "../components/Layout"


export default function Information() {
  return (
    <Layout>
      <Seo title="Информация по созданию учетной записи"/>
      <main className="main">
        <div className="main_container">
          <div className="container">
            <div className="information">
              <h2>Информация</h2>
              <p>На ваш email отправлено ссылка для подтверждения учетной записи</p>
              <p>Чтобы закончить процесс регистрации пожалуйста пройдите по ссылке</p>
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