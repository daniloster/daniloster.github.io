import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import loadable from "@loadable/component"

import formatDate from "../utils/formatDate"
import Page from "../components/Page"
import SEO from "../components/seo"
import Title from "./components/Title"
import Subtitle from "./components/Subtitle"
import Html from "./components/Html"

const { useMemo } = React

export default function PagesTemplate({ pageContext }) {
  const { page } = pageContext
  const { frontmatter, html } = page
  const { component } = frontmatter
  const createdDate = useMemo(() => new Date(frontmatter.createdDate), [
    frontmatter.createdDate,
  ])

  const hasWindow = typeof window !== "undefined"
  const PageComponent = hasWindow
    ? loadable(() => import(`../${component}`))
    : ({ html }) => <Html>{html}</Html>

  return (
    <Page>
      <SEO title="Page two" />
      <div className="blog-post">
        <Title>{frontmatter.title}</Title>
        <Subtitle>{formatDate(createdDate)}</Subtitle>
        {hasWindow && (
          <React.Suspense fallback={<Subtitle>Loading...</Subtitle>}>
            <PageComponent html={html} page={page} />
          </React.Suspense>
        )}
      </div>
    </Page>
  )
}

PagesTemplate.propTypes = {
  pageContext: PropTypes.shape({}).isRequired,
}

// export const pageQuery = graphql`
//   query($path: String!) {
//     markdownRemark(frontmatter: { path: { eq: $path } }) {
//       html
//       frontmatter {
//         component
//         createdDate
//         isDraft
//         path
//         tags
//         title
//       }
//     }
//   }
// `
