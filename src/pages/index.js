import React from "react"
import styled from "styled-components"

import Page from "../components/Page"
import Posts from "../components/Posts"
import Title from "../templates/components/Title"
import getColor from "../templates/components/getColor"

export default function IndexPage() {
  return (
    <Page title="Home" keywords={[`gatsby`, `application`, `react`]}>
      <Title>Posts</Title>
      <Posts />
    </Page>
  )
}
