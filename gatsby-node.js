/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  // Wrap the require in check for window
  return new Promise((resolve, reject) => {
    const blogPostTemplate = require.resolve(`./src/templates/PagesTemplate`)

    resolve(
      graphql(`
        {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___createdDate] }
            limit: 1000
          ) {
            nodes {
              html
              id
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
        }
      `).then(result => {
        if (result.errors) {
          return reject(result.errors)
        }

        result.data.allMarkdownRemark.nodes.forEach(node => {
          createPage({
            path: node.frontmatter.path,
            component: blogPostTemplate,
            context: {
              page: node,
            }, // additional data can be passed via context
          })
        })
      })
    )
  })
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /bad-module/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
