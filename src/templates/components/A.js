import styled from "styled-components"
import PropTypes from "prop-types"
import getColor from "./getColor"

const A = styled.a.attrs({
  className: ({ isCursive }) => (isCursive ? "cursive" : "monospace"),
  rel: ({ target, rel = "" }) =>
    target === "_blank" ? "noopener noreferrer" : rel,
})`
  &,
  &:visited,
  &:active,
  &:hover {
    text-decoration: none;
    cursor: pointer;
  }

  &,
  &:active,
  &:visited {
    color: ${getColor("default", "dark")};
  }

  &:hover {
    color: ${getColor("default", "medium")};
  }
`

A.propTypes = {
  isCursive: PropTypes.bool,
  isReverse: PropTypes.bool,
}

A.defaultProps = {
  isCursive: false,
  isReverse: false,
}

export default A
