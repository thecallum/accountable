import React, { useContext } from "react"
import { Link } from "gatsby"
import { navigate } from "@reach/router"

import { Context } from "../context/context"
import Styled from "styled-components"

const Navbar = Styled.nav`
  background-color: hsl(0, 50%, 50%);
  padding: 15px;

  display: flex;
  justify-content: space-between;

  li > a {
    color: #fff;
    text-decoration: none;
    cursor: pointer;
    display: block;

    &:hover {
      margin: -1px 0 1px;
      text-decoration: underline;
    }
  }

  .title > a {
    font-weight: 100;
    font-size: 28px;
    color: #fff;
    text-decoration: none;
  }

  ul {
    margin: 0;
    padding: 0;
    display: flex;
    margin-right: -10px;
    flex-wrap: wrap;
    align-items: center;
  }

  li {
    display: block;
    margin-right: 10px;
  }
`

export default () => {
  const { store, actions } = useContext(Context)

  const logout = () => {
    actions.logout()
    navigate("/")
  }

  return (
    <Navbar>
      <div className="title">
        <Link to="/">Navbar</Link>
      </div>

      <ul>
        {!!store.auth.authenticated ? (
          <>
            <li>
              <Link to="/app/">Home</Link>
            </li>

            <li>
              <Link to="/app/about/">About</Link>
            </li>
            <li>
              <a onClick={logout}>Logout</a>
            </li>
          </>
        ) : (
          <li>
            <Link to="/app/login/">Login</Link>
          </li>
        )}
      </ul>
    </Navbar>
  )
}
