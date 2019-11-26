import React from "react"
import { Router } from "@reach/router"

import Home from "./app/index"
import About from "./app/about"
import Login from "./app/login"

import PrivateRoute from "./components/privateRoute"

export default () => (
  <Router>
    <Home path="/app/" />
    <Login path="/app/login/" />
    <PrivateRoute component={About} path="/app/about/" />
  </Router>
)
