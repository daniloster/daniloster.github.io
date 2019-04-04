import React from "react"
import styled from "styled-components"
import A from "../templates/components/A"
import Palette from "../templates/components/Palette"
import { colors } from "../templates/components/getColor"

const Gatsby = styled.div`
  height: 24px;
  white-space: nowrap;
`

const FooterLayout = styled.footer.attrs({ className: "monospace" })`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;

  /* &:before {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 1px;
    top: 0;
    box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.8);

    z-index: 3;
  }

  position: sticky;
  bottom: 0;
  background-color: white; */

  height: 70px;
  width: 100%;
  align-items: center;

  & ${Palette.Layout} {
    justify-self: end;
  }
`

export default function Footer() {
  return (
    <FooterLayout>
      <Gatsby>
        © {new Date().getFullYear()}, Built with
        {` `}
        <A href="https://www.gatsbyjs.org">Gatsby</A>
      </Gatsby>
      <Palette colorsMap={colors} />
    </FooterLayout>
  )
}

Footer.Layout = FooterLayout
