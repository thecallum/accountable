import React, { createContext, Component } from "react"
import axios from "axios"

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
        auth: false,
      }
    } else {
      defaultState = {
        auth: true,
      }
    }

    this.state = {
      ...defaultState,
    }
  }

  login(email, password) {
    const data = {
      email,
      password,
    }

    return new Promise(resolve => {
      axios
        .post("http://localhost:8000/auth/login", data)
        .then(res => {
          const token = res.data

          this.setToken(token)

          this.setState(state => ({
            ...state,
            auth: true,
          }))

          resolve({
            success: true,
          })
        })
        .catch(e => {
          resolve({
            success: false,
            error: e.message,
          })
        })
    })
  }

  logout(cb) {
    this.deleteToken()
    this.setState(state => ({
      ...state,
      auth: false,
    }))
    if (!!cb) cb()
  }

  //   required for gatsby build
  isBrowser() {
    return typeof window !== "undefined"
  }

  setToken(token) {
    window.localStorage.setItem("token", JSON.stringify(token))
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
