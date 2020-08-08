import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const PaletteLayout = styled.div`
  display: grid;
  align-items: center;

  @media (max-width: 960px) {
    height: 80px;
    width: 160px;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(auto-fit, auto);
  }
  @media (min-width: 961px) {
    height: 40px;
    width: 280px;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: auto;
  }
`

const Box = styled.div`
  background-color: ${props => props.color};
  min-height: 40px;
  min-width: 40px;
`

const { useMemo } = React

export default function Palette({ colorsMap }) {
  const colors = useMemo(
    () => Object.keys(colorsMap).map(key => colorsMap[key]),
    [colorsMap]
  )

  return (
    <PaletteLayout>
      {colors.map(color => (
        <Box color={color} key={color} />
      ))}
    </PaletteLayout>
  )
}

Palette.Layout = PaletteLayout

Palette.propTypes = {
  colorsMap: PropTypes.shape({}).isRequired,
}

Palette.defaultProps = {}
