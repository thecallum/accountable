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

        <ul>
          <li>
            <Link to="/app/">Home</Link>
          </li>
          <li>
            <Link to="/app/about/">About</Link>
          </li>

          {!!context && context.state.auth ? (
            <li>
              <a onClick={() => context.logout(() => {})}>Logout</a>
            </li>
          ) : (
            <li>
              <Link to="/app/login/">Login</Link>
            </li>
          )}
        </ul>
      </nav>
    )}
  </Consumer>
)
