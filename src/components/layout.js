import React from "react"
import Navbar from "./navbar"
import Container from "./container"
import "normalize.css/normalize.css"

export default ({ children }) => (
  <>
    <Navbar>Navbar</Navbar>
    <main>
      <Container>{children}</Container>
    </main>
  </>
)
