import React from "react"
import { Link } from "gatsby"
// import MyContext from "../components/context"
import { Consumer } from "../services/security"

export default () => (
  <div>
    <p>about</p>

    <Consumer>
      {context => (
        <>
          <p>About</p>
          <p>name: {context.state.name}</p>
          <Link to="/app/">home</Link>
        </>
      )}
    </Consumer>
  </div>
)
