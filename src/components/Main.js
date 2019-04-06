import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import Title from "../templates/components/Title"

const MainLayout = styled.main.attrs({ className: "monospace" })`
  width: 100%;

  & > ${Title}:first-child {
    padding-top: 7px;
  }
`

export default function Main({ children }) {
  return <MainLayout>{children}</MainLayout>
}

Main.Layout = MainLayout

Main.propTypes = {
  children: PropTypes.node,
}

Main.defaultProps = {
  children: null,
}
