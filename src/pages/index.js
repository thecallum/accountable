import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

export default () => {
  return (
    <Layout>
      <h1>Home page</h1>
      <p>About the app</p>

      <Link to="/app/login/">Login</Link>
    </Layout>
  )
}
