import React from "react"
import Navbar from "./navbar"

export default ({ children }) => (
  <>
    <Navbar>Navbar</Navbar>
    <main>{children}</main>
  </>
)
