import React from "react"

import Layout from "../components/Page"
import Page from "../components/Page"
import Title from "../templates/components/Title"

const NotFoundPage = () => (
  <Page title="404: Not found">
    <Title>NOT FOUND</Title>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Page>
)

export default NotFoundPage
