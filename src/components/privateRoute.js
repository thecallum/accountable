import React from "react"

import { Link, navigate } from "gatsby"
// import { checkAuth } from "../services/auth"

export default ({ component: Component, location, ...rest }) => {
  if (false && location.pathname !== "/app/") {
    navigate("/app/")

    return null
  }

  return <Component {...rest} />
}
