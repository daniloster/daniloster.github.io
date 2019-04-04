import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import formatDate from "../utils/formatDate"
import Link from "../templates/components/Link"

const Title = styled.h2`
  margin: 0;
  color: inherit;
`
const CreatedDate = styled.div``
const PostBriefLayout = styled.div`
  display: grid;
  align-items: center;

  @media (max-width: 920px) {
    grid-template-columns: 100%;
    grid-template-rows: 34px 28px 20px;
  }
  @media (min-width: 921px) {
    grid-template-columns: minmax(min-content, 100%) 190px;
    grid-template-rows: 54px;
  }
`

const { useMemo } = React

export default function PostBrief({ post }) {
  const createdDate = useMemo(() => new Date(post.frontmatter.createdDate), [
    post,
  ])

  return (
    <PostBriefLayout>
      <Title>
        <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
      </Title>
      <CreatedDate>{formatDate(createdDate)}</CreatedDate>
    </PostBriefLayout>
  )
}

PostBrief.Layout = PostBriefLayout

PostBrief.propTypes = {
  post: PropTypes.shape({}).isRequired,
}

PostBrief.defaultProps = {}
