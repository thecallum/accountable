export const login = () => {
  setToken()
  return true
}

export const logout = cb => {
  deleteToken()
  cb()
}

export const checkAuth = () => {
  return !!getToken()
}

const setToken = () => {
  window.localStorage.setItem("token", JSON.stringify({ name: "test" }))
}

const deleteToken = () => {
  window.localStorage.removeItem("token")
}

const getToken = () => {
  return window.localStorage.getItem("token")
}
