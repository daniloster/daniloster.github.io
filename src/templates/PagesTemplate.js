import PropTypes from "prop-types"
import React from "react"
import Page from "../components/Page"
import formatDate from "../utils/formatDate"
import Html from "./components/Html"
import Subtitle from "./components/Subtitle"
import Title from "./components/Title"


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
    ? React.lazy(() => import(`../${component}`))
    : ({ html }) => <Html>{html}</Html>

  return (
    <Page title={frontmatter.title}>
      <Title>{frontmatter.title}</Title>
      <Subtitle>{formatDate(createdDate)}</Subtitle>
      {hasWindow && (
        <React.Suspense fallback={<Subtitle>Loading...</Subtitle>}>
          <PageComponent html={html} page={page} />
        </React.Suspense>
      )}
    </Page>
  )
}

PagesTemplate.propTypes = {
  pageContext: PropTypes.shape({}).isRequired,
}
