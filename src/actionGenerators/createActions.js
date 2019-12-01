import axios from "axios"
import { setToken, deleteToken } from "../services/token"
import { API_ROOT } from "../config/config.json"

export default dispatch => {
  return {
    login: (email, password) => {
      dispatch({ type: "AUTH_START" })

      const data = {
        email,
        password,
      }

      return new Promise(resolve => {
        axios
          .post(API_ROOT + "/auth/login", data)
          .then(res => {
            const token = res.data
            setToken(token)
            dispatch({ type: "AUTH_VALID", token })
            resolve(true)
          })
          .catch(e => {
            dispatch({ type: "AUTH_INVALID", error: e.message })
            resolve(e)
          })
      })
    },

    logout() {
      deleteToken()
      dispatch({ type: "AUTH_LOGOUT" })
    },
  }
}
