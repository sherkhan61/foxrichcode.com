import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import "../styles/404/404.scss"



export default function NotFound() {
  return (
    <Layout>
      <Seo title="Страница не найдена"/>
      <main className="main">
        <div className="main_container">
          <div className="container">
            <div className="not-found">
              <h2>404</h2>
              <p>Извените, страница не найдена</p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}