import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import formatDate from "../utils/formatDate"
import Page from "../components/Page"
import SEO from "../components/seo"
import Title from "./components/Title"
import Subtitle from "./components/Subtitle"

const { useMemo } = React

export default function Template({ data }) {
  console.log("postpage", data)
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  const { component } = frontmatter
  const createdDate = useMemo(() => new Date(frontmatter.createdDate), [
    frontmatter.createdDate,
  ])

  const Article = React.lazy(() => import(`../articles/${component}`))

  return (
    <Page>
      <SEO title="Page two" />
      <div className="blog-post">
        <Title>{frontmatter.title}</Title>
        <Subtitle>{formatDate(createdDate)}</Subtitle>
        <React.Suspense fallback={<Subtitle>Loading...</Subtitle>}>
          <Article brief={html} article={markdownRemark} />
        </React.Suspense>
      </div>
    </Page>
  )
}

Template.propTypes = {
  data: PropTypes.shape({}).isRequired,
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      headings {
        value
        depth
      }
      frontmatter {
        component
        createdDate
        isDraft
        path
        tags
        title
      }
    }
  }
`
