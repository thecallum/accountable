import React, { useContext, useState } from "react"
import { Context } from "../context/context"
import { navigate } from "gatsby"

export default () => {
  const { store, actions } = useContext(Context)

  const [state, setState] = useState({
    errors: [],
    email: "",
    password: "",
  })

  const handleLogin = e => {
    e.preventDefault()
    if (store.auth.loading) return

    const errors = []

    if (state.email === "") errors.push("Add a valid email")
    if (state.password === "") errors.push("Add a valid password")

    setState(state => ({
      ...state,
      errors,
    }))

    if (errors.length) return

    actions.login(state.email, state.password).then(res => {
      if (res === true) {
        // alert("login")
        navigate("/app/about/")
      } else {
        // alert(res.message)

        setState(state => ({
          ...state,
          errors: [res.message],
        }))
      }
    })
  }

  const handleChange = e =>
    setState({ ...state, [e.target.name]: e.target.value })

  return (
    <>
      <h1>Login</h1>

      <form onSubmit={handleLogin}>
        <div>
          <label>
            email
            <input
              type="text"
              name="email"
              value={state.email}
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

        <button type="submit">Login</button>
      </form>

      {store.auth.loading && <p>Loading...</p>}

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
