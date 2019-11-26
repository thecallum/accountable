import React from "react"

import { navigate } from "gatsby"
import { Consumer } from "../services/security"

export default ({ component: Component, location, ...rest }) => (
  <Consumer>
    {context =>
      !context.state.auth ? navigate("/app/") : <Component {...rest} />
    }
  </Consumer>
)
