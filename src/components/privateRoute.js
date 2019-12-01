import React, { useContext } from "react"
import { Redirect } from "@reach/router"
import { Context } from "../context/context"

export default ({ component: Component, location, ...rest }) => {
  const { store } = useContext(Context)

  return !!store.auth.authenticated ? (
    <Component {...rest} />
  ) : (
    <Redirect to="/app/login/" noThrow />
  )
}
