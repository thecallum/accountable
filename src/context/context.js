import React, { createContext, useReducer } from "react"
import reducer from "../reducers/reducer"
import { getToken } from "../services/token"
import createActions from "../actionGenerators/createActions"

export const Context = createContext()

const defaultState = token => ({
  auth: {
    authenticated: token !== null,
    token,
    loading: false,
    error: null,
  },
})

export default ({ children }) => {
  let token = getToken()

  if (token !== null) token = JSON.parse(token)

  const [store, dispatch] = useReducer(reducer, defaultState(token))

  const actions = createActions(dispatch)

  return (
    <Context.Provider
      value={{
        store,
        actions,
      }}
    >
      {children}
    </Context.Provider>
  )
}
