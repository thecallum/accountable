import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import Store from "../context/context"

export default () => {
  return (
    <Store>
      <Layout>
        <h1>Home page</h1>
        <p>About the app</p>
        <Link to="/app/login/">Login</Link>
      </Layout>
    </Store>
  )
}
