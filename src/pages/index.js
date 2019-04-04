import React from "react"
import styled from "styled-components"

import Page from "../components/Page"
import SEO from "../components/seo"
import Posts from "../components/Posts"
import getColor from "../templates/components/getColor"

const Title = styled.h1`
  /* color: ${getColor("default", "medium")}; */
`

const IndexPage = () => (
  <Page>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Title>Posts</Title>
    <Posts />
  </Page>
)

export default IndexPage
