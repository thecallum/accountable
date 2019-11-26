import React from "react"
import Layout from "../components/layout"
import Router from "../appRouter"

import { Security } from "../services/security"

export default () => (
  <Security>
    <Layout>
      <Router />
    </Layout>
  </Security>
)
