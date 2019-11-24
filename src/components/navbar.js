import React from "react"
import { Link } from "gatsby"

import { Consumer } from "../services/security"

export default () => (
  <Consumer>
    {context => (
      <nav
        style={{
          backgroundColor: "red",
          padding: "15px",
        }}
      >
        <span>Navbar</span>

        <p>name: {context.state.name}</p>

        <ul>
          {context.state.auth ? (
            <button onClick={() => context.logout(() => {})}>Logout</button>
          ) : (
            <button onClick={context.login}>Login</button>
          )}
        </ul>
      </nav>
    )}
  </Consumer>
)
