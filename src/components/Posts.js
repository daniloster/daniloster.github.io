import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"

import PostBrief from "./PostBrief"

const PostsLayout = styled.div``

const isNotProduction = process.env.NODE_ENV !== "production"

function filterPosts(posts) {
  return posts
    .filter(
      ({ node: { frontmatter } }) => !frontmatter.isDraft || isNotProduction
    )
    .map(({ node }) => node)
}

function PostsRenderer({ allMarkdownRemark }) {
  const posts = filterPosts(allMarkdownRemark.edges)

  return (
    <PostsLayout>
      {posts.map(post => (
        <PostBrief key={post.id} post={post} />
      ))}
    </PostsLayout>
  )
}

const Posts = () => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___createdDate] }
          limit: 100
        ) {
          edges {
            node {
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
      }
    `}
    render={PostsRenderer}
  />
)

Posts.Layout = PostsLayout

Posts.propTypes = {}

Posts.defaultProps = {}

export default Posts
