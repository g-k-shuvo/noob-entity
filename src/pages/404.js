import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"

const NotFound = () => {
  return (
    <Layout>
      <div className="error">
        <h1>Page Not Found! 🙄</h1>
        <h4 className="error-link">
          <Link to="/">Go Home 🏡</Link>
        </h4>
      </div>
    </Layout>
  )
}

export default NotFound
