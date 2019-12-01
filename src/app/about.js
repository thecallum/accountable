import React, { useContext } from "react"
import axios from "axios"
import { Context } from "../context/context"

export default () => {
  const { store } = useContext(Context)

  const request = () => {
    console.log("request")

    const token = `Bearer ${store.auth.token.access_token}`

    axios({
      method: "get",
      url: "http://localhost:8000/",
      headers: {
        Authorization: token,
      },
    })
      .then(res => {
        console.log(res.status)
        console.log("res", res)
      })
      .catch(e => {
        console.log(e.response.status)
        console.log("error", { ...e })
      })
  }
  return (
    <>
      <h1>About</h1>
      <button onClick={request}>Authenticated Request</button>
    </>
  )
}
