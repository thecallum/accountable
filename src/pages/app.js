import React from "react"
import Layout from "../components/layout"
import Router from "../appRouter"
import Store from "../context/context"

export default () => (
  <Store>
    <Layout>
      <Router />
    </Layout>
  </Store>
)
