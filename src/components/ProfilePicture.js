/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"


const ProfileImageContainer = styled.div`
  position: relative;
  height: ${props => props.height};
  width: ${props => props.width};
`
const ProfileImage = styled.img`
  border-radius: 50%;
  box-shadow: 0 8px 10px 0 rgba(0, 0, 0, 0.2), 0 1px 16px 0 rgba(0, 0, 0, 0.19);
`

export default function ProfilePicture({ publicURL, name }) {
  return (
    <ProfileImageContainer height="190px" width="190px">
      <ProfileImage src={publicURL} alt={name} />
    </ProfileImageContainer>
  )
}

ProfilePicture.Layout = ProfileImageContainer

ProfilePicture.propTypes = {
  publicURL: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}
