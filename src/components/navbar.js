import React from "react"
import { Link } from "gatsby"
import { Consumer } from "../services/security"
import Styled from "styled-components"

const Navbar = Styled.nav`
  background-color: hsl(0, 50%, 50%);
  padding: 15px;

  display: flex;
  justify-content: space-between;

  .title {
    font-weight: 100;
    font-size: 28px;
    color: #fff;
    font-family: sans-serif;
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

export default () => (
  <Consumer>
    {context => (
      <Navbar>
        <div className="title">Navbar</div>

        <ul>
          <li>
            <Link to="/app/">Home</Link>
          </li>

          {!!context && context.state.auth ? (
            <>
              <li>
                <Link to="/app/about/">About</Link>
              </li>
              <li>
                <a onClick={() => context.logout(() => {})}>Logout</a>
              </li>
            </>
          ) : (
            <li>
              <Link to="/app/login/">Login</Link>
            </li>
          )}
        </ul>
      </Navbar>
    )}
  </Consumer>
)
