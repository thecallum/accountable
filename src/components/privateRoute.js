import React from "react"
import { Redirect } from "@reach/router"
import { Consumer } from "../services/security"

export default ({ component: Component, location, ...rest }) => (
  <Consumer>
    {context =>
      !context.state.auth ? (
        <Redirect to="/app/login/" noThrow />
      ) : (
        <Component {...rest} />
      )
    }
  </Consumer>
)
