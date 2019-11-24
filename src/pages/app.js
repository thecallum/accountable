import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import PrivateRoute from "../components/privateRoute"

import Home from "../app/index"
import About from "../app/about"

export default () => (
  <Layout>
    <Router>
      <Home path="app" />
      <PrivateRoute component={About} path="app/about" />
    </Router>
  </Layout>
)
