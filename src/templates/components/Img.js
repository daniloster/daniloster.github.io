import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
// import "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"

const StyledImg = styled.img`
  display: grid;
  margin: 0 auto;
`

export default function Img(props) {
  return (
    <StaticQuery
      query={graphql`
        query Images {
          allFile(sort: { order: DESC, fields: [birthtimeMs] }) {
            nodes {
              id
              publicURL
              name
            }
          }
        }
      `}
      render={data => {
        const { name: imgName } = props
        const {
          allFile: { nodes: images },
        } = data
        const imgData = images.find(
          ({ name: currentImageName }) => imgName === currentImageName
        )
        const { name, publicURL } = imgData

        return <StyledImg alt={name} src={publicURL} />
      }}
    />
  )
}
