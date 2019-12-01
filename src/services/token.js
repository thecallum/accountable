// required for gatsby build
const isBrowser = () => {
  return typeof window !== "undefined"
}

export const setToken = token => {
  window.localStorage.setItem("token", JSON.stringify(token))
}

export const deleteToken = () => {
  window.localStorage.removeItem("token")
}

export const getToken = () => {
  if (!isBrowser()) return null
  return window.localStorage.getItem("token")
}
