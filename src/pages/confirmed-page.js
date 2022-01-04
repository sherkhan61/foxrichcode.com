import React from "react"
import Seo from "../components/Seo"
import "../styles/information/information.scss"
import { Link } from "gatsby"
import Layout from "../components/Layout"


export default function Confirmed() {
  return (
    <Layout>
      <Seo title="Подтверждение регистрации учетной записи"/>
      <main className="main">
        <div className="main_container">
          <div className="container">
            <div className="information">
              <h2>Регистрация успешна завершена!</h2>
              <p>Спасибо за регистрацию, ваша учётная запись была создана</p>
              <p>Вы можете войти в систему, используя ваш email и пароль</p>
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