/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import AnimateProxy from "./Animate/AnimateProxy"
import HoverBounceFlip from "./animations/HoverBounceFlip"

const ProfileImage = styled.img`
  border-radius: 50%;
  box-shadow: 0 8px 10px 0 rgba(0, 0, 0, 0.2), 0 1px 16px 0 rgba(0, 0, 0, 0.19);
`

export default function ProfilePicture({ publicURL, name }) {
  return (
    <HoverBounceFlip height="100px" width="100px" hoverTarget={ProfileImage}>
      <ProfileImage src={publicURL} alt={name} />
    </HoverBounceFlip>
  )
}

ProfilePicture.Layout = AnimateProxy

ProfilePicture.propTypes = {
  publicURL: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}
