import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const MainLayout = styled.main.attrs({ className: "monospace" })``

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
