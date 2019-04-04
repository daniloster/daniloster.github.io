import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Subtitle from "./Subtitle"
import A from "./A"

const ReferencesLayout = styled.div`
  display: grid;
  grid-template-columns: min-content;
  grid-template-rows: repeat(auto-fit, auto);

  & > * {
    white-space: nowrap;
  }

  & > ${A}:before {
    padding: 0 7px 7px;
    content: "\uf02d";
    display: inline-block;
    font-family: FontAwesome;
    font-weight: normal;
    font-style: normal;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }
`

export default function References({ children }) {
  return (
    <ReferencesLayout>
      <Subtitle>References</Subtitle>
      {children}
    </ReferencesLayout>
  )
}

References.propTypes = {
  children: PropTypes.node.isRequired,
}
