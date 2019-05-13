import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import PostBrief from "./PostBrief"
import filterPosts from "./filterPosts"

const { useMemo } = React

const PostsLayout = styled.div``

export default function PostsRenderer(props) {
  const { allMarkdownRemark } = props
  const posts = allMarkdownRemark.nodes

  return (
    <PostsLayout>
      {posts.map(post => (
        <PostBrief key={post.id} post={post} />
      ))}
    </PostsLayout>
  )
}

PostsRenderer.Layout = PostsLayout

PostsRenderer.propTypes = {
  allMarkdownRemark: PropTypes.shape({
    nodes: PropTypes.arrayOf(PropTypes.shape({})),
  }),
}

PostsRenderer.defaultProps = {
  allMarkdownRemark: { nodes: [] },
}
