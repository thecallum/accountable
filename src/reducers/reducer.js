export default (store, action) => {
  switch (action.type) {
    case "AUTH_START":
      return {
        ...store,
        auth: {
          ...store.auth,
          loading: true,
          error: null,
        },
      }
    case "AUTH_VALID":
      return {
        ...store,
        auth: {
          ...store.auth,
          loading: false,
          token: action.token,
          authenticated: true,
        },
      }

    case "AUTH_INVALID":
      return {
        ...store,
        auth: {
          ...store.auth,
          loading: false,
          error: action.error,
        },
      }

    case "AUTH_LOGOUT":
      return {
        ...store,
        auth: {
          ...store.auth,
          token: null,
          authenticated: false,
        },
      }

    default:
      return store
  }
}
