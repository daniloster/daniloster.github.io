import React from "react"

import Page from "../components/Page"
import Posts from "../components/Posts"
import Title from "../templates/components/Title"

export default function IndexPage() {
  return (
    <Page title="Home" keywords={[`gatsby`, `application`, `react`]}>
      <Title>Posts</Title>
      <Posts />
    </Page>
  )
}
