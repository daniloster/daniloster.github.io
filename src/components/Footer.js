import React from "react"
import styled from "styled-components"
import A from "../templates/components/A"
import { colors } from "../templates/components/getColor"
import Palette from "../templates/components/Palette"

const Gatsby = styled.div`
  display: flex;
  height: 24px;
  white-space: nowrap;
`

const FooterLayout = styled.footer.attrs({ className: "monospace" })`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;

  height: 70px;
  align-items: center;
  width: 100%;

  @media print {
    display: block;
    height: unset;
  }

  @media (max-width: 443px) {
    & ${Gatsby} {
      display: inline;
    }
  }

  @media (max-width: 960px) {
    height: 110px;
    align-items: start;

    & ${Gatsby} {
      height: 40px;
      align-items: center;
      white-space: normal;
    }
  }

  & ${Gatsby} {
    & span,
    & ${A} {
      padding-right: 7px;
    }
  }

  & ${Palette.Layout} {
    justify-self: end;
  }
`

export default function Footer() {
  return (
    <FooterLayout>
      <Gatsby>
        <span>
          © {new Date().getFullYear()}, Built with
          {` `}
        </span>
        <A href="https://www.gatsbyjs.org">Gatsby</A>
      </Gatsby>
      <Palette colorsMap={colors} />
    </FooterLayout>
  )
}

Footer.Layout = FooterLayout
