import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { Security } from "../services/security"

export default () => {
  return (
    <Security>
      <Layout>
        <h1>Home page</h1>
        <p>About the app</p>
        <Link to="/app/login/">Login</Link>
      </Layout>
    </Security>
  )
}
