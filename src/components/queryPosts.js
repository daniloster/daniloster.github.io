import { graphql } from "gatsby"

export default graphql`
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
`
