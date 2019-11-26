import React, { createContext, Component } from "react"

const { Provider, Consumer } = createContext()

class Security extends Component {
  constructor(props) {
    super(props)

    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
    this.isBrowser = this.isBrowser.bind(this)
    this.setToken = this.setToken.bind(this)
    this.deleteToken = this.deleteToken.bind(this)
    this.getToken = this.getToken.bind(this)
    this.render = this.render.bind(this)

    let defaultState

    let token = this.getToken()

    if (token === null) {
      defaultState = {
        name: false,
        id: false,
        auth: false,
      }
    } else {
      token = JSON.parse(token)

      defaultState = {
        name: "John",
        id: "1",
        auth: true,
      }
    }

    this.state = {
      ...defaultState,
    }
  }

  login(email, password, cb) {
    if (email !== "email" || password !== "password") {
      if (!!cb) cb(false)
      return false
    }

    this.setToken()

    this.setState(state => ({
      ...state,
      name: "John",
      id: "1",
      auth: true,
    }))

    if (!!cb) cb(true)
  }

  logout(cb) {
    this.deleteToken()
    this.setState(state => ({
      ...state,
      name: null,
      id: null,
      auth: false,
    }))
    if (!!cb) cb()
  }

  //   required for gatsby build
  isBrowser() {
    return typeof window !== "undefined"
  }

  setToken() {
    window.localStorage.setItem("token", JSON.stringify({ name: "test" }))
  }

  deleteToken() {
    window.localStorage.removeItem("token")
  }

  getToken() {
    if (!this.isBrowser()) return null
    return window.localStorage.getItem("token")
  }

  render() {
    return (
      <Provider
        value={{
          state: this.state,
          login: this.login,
          logout: this.logout,
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

export { Consumer, Security }
