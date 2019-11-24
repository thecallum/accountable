import React, { createContext, Component, useState } from "react"

const { Provider, Consumer } = createContext()

const Security = props => {
  const [state, setState] = useState({
    name: "John",
    id: 1,
    auth: true,
  })

  //   Load token on first load

  const login = () => {
    setToken()
    setState(state => ({
      ...state,
      name: "John",
      id: "1",
      auth: true,
    }))
    return true
  }

  const logout = cb => {
    deleteToken()
    setState(state => ({
      ...state,
      name: null,
      id: null,
      auth: false,
    }))
    cb()
  }

  //   required for gatsby build
  const isBrowser = () => typeof window !== "undefined"

  const setToken = () => {
    window.localStorage.setItem("token", JSON.stringify({ name: "test" }))
  }

  const deleteToken = () => {
    window.localStorage.removeItem("token")
  }

  const getToken = () => {
    if (!isBrowser()) return null
    return window.localStorage.getItem("token")
  }

  const setName = newName => {
    setState(state => ({
      ...state,
      name: newName,
    }))
  }

  const toggleName = () => {
    setState(state => ({
      ...state,
      name: state.name === "Callum" ? "Fred" : "Callum",
    }))
  }

  return (
    <Provider
      value={{
        state,
        toggleName,
        login,
        logout,
      }}
    >
      {props.children}
    </Provider>
  )
}

export { Consumer, Security }
