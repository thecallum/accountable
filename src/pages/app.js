import React, { Component } from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import PrivateRoute from "../components/privateRoute"

import Home from "../app/index"
import About from "../app/about"

// import MyProvider from "../components/provider"

import { Security } from "../services/security"

export default () => {
  return (
    <Security>
      <Layout>
        <Router>
          <Home path="app" />
          <About path="app/about" />
        </Router>
      </Layout>
    </Security>
  )
}
