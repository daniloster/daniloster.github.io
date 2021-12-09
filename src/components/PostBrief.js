import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Link from "../templates/components/Link"
import formatDate from "../utils/formatDate"

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
    grid-template-rows: minmax(min-content, 100%) 28px 20px;
  }
  @media (min-width: 921px) {
    grid-template-columns: minmax(min-content, 100%) 245px;
    grid-template-rows: 54px;

    & ${CreatedDate} {
      justify-self: end;
    }
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
