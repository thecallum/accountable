import React from "react"
import { Consumer } from "../services/security"
import { navigate } from "gatsby"

export default () => (
  <Consumer>
    {context => (
      <>
        <p>Login</p>

        <button onClick={() => context.login(() => navigate("/app/about/"))}>
          Login
        </button>
      </>
    )}
  </Consumer>
)
