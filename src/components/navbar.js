import React, { useState } from "react"
import { checkAuth, login, logout } from "../services/auth"
import { Link, navigate } from "gatsby"

export default () => {
  const [auth, setAuth] = useState(checkAuth())

  return (
    <nav
      style={{
        backgroundColor: "red",
      }}
    >
      <span>Navbar</span>

      <p>Logged IN {auth ? "true" : "false"}</p>

      {auth ? (
        <a
          onClick={() => {
            logout(() => navigate("/app/"))
            setAuth(false)
          }}
        >
          Logout
        </a>
      ) : (
        <a
          onClick={() => {
            login()
            setAuth(true)
          }}
        >
          Login
        </a>
      )}
    </nav>
  )
}
