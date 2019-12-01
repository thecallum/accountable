import React, { useContext } from "react"
import { navigate } from "@reach/router"
import { Context } from "../context/context"

export default ({ component: Component, location, ...rest }) => {
  const { store } = useContext(Context)

  if (!store.auth.authenticated) {
    navigate("/app/login/")
    return null
  }

  return <Component {...rest} />
}
