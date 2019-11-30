import React, { useState } from "react"
import { Consumer } from "../services/security"
import { navigate } from "gatsby"

const Form = ({ login }) => {
  const [state, setState] = useState({
    loading: false,
    errors: [],

    email: "",
    password: "",
  })

  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }

  const handleLogin = () => {
    const errors = []
    if (state.email === "") errors.push("Add a valid email")
    if (state.password === "") errors.push("Add a valid password")

    setState(state => ({ ...state, errors }))

    if (errors.length > 0) return

    setState(state => ({ ...state, loading: true }))

    login(state.email, state.password).then(res => {
      console.log("login", res)

      if (res.success) {
        navigate("/app/about/")
      }

      setState(state => ({
        ...state,
        loading: false,
        errors: [res.error],
      }))
    })
  }

  return (
    <>
      <div>
        <label>
          email
          <input
            type="text"
            name="email"
            value={state.name}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          password
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={handleChange}
          />
        </label>
      </div>

      <button onClick={handleLogin}>Login</button>

      {state.loading && <p>loading...</p>}

      {state.errors.length > 0 && (
        <ul>
          {state.errors.map((error, index) => (
            <li style={{ color: "red" }} key={index}>
              {error}
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default () => (
  <Consumer>
    {context => (
      <>
        <p>Login</p>

        <Form login={context.login} />
      </>
    )}
  </Consumer>
)
