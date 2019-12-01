import React from "react"
import Navbar from "./navbar"
import Container from "./container"
import Store from "../context/context"
import "normalize.css/normalize.css"
import "../css/main.css"

export default ({ children }) => (
  <Store>
    <Navbar>Navbar</Navbar>
    <main>
      <Container>{children}</Container>
    </main>
  </Store>
)
