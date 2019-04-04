import { Link } from "gatsby"
import styled from "styled-components"
import getColor from "./getColor"

export default styled(Link).attrs({
  className: ({ isCursive }) => (isCursive ? "cursive" : "monospace"),
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
