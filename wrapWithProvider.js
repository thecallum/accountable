import React from "react"
import { StoreProvider } from "easy-peasy"

import createStore from "./src/state/createStore"

export default ({ element }) => {
  const store = createStore()

  return <StoreProvider store={store}>{element}</StoreProvider>
}
