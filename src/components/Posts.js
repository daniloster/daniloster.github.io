import React from "react"
import { StaticQuery, graphql } from "gatsby"

import PostsRenderer from "./PostsRenderer"

function Posts() {
  return (
    <StaticQuery
      query={graphql`
        {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___createdDate] }
            limit: 100
          ) {
            nodes {
              html
              headings {
                value
                depth
              }
              id
              frontmatter {
                createdDate
                isDraft
                path
                tags
                title
              }
            }
          }
        }
      `}
      render={PostsRenderer}
    />
  )
}

Posts.Layout = PostsRenderer.Layout

Posts.propTypes = {}

Posts.defaultProps = {}

export default Posts
