import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Link from "../templates/components/Link"
import A from "../templates/components/A"
import {
  MAX_WIDTH_STACK,
  MIN_WIDTH_COLUMNS,
} from "../templates/components/breakpoints"

const Title = styled.h1.attrs({ className: "cursive" })`
  display: flex;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 75px;
  margin: 0;
  background-color: inherit;

  @media (max-width: ${MAX_WIDTH_STACK}) {
    position: sticky;
    top: 30px;
  }
`

const Picture = styled.div`
  width: 100%;
  padding: 15px 0;
`

const Paragraph = styled.p`
  width: 100%;
  padding: 10px 0 0 0;
  text-align: ${({ center }) => (center ? "center" : "left")};
`

const HeaderLayout = styled.header.attrs({ className: "monospace" })`
  background-color: #73ebdc;
  width: 100%;
  min-height: 100%;

  @media (max-width: ${MAX_WIDTH_STACK}) {
    position: sticky;
    top: calc(75px - 420px);
  }

  @media (min-width: ${MIN_WIDTH_COLUMNS}) {
    position: relative;
  }
`

const HeaderContentLayout = styled.div.attrs({ className: "monospace" })`
  width: 100%;
  background-color: inherit;

  @media (min-width: ${MIN_WIDTH_COLUMNS}) {
    position: sticky;
    top: 27px;
  }

  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: minmax(1px, min-content) minmax(1px, min-content) 60px 20px 20px auto;
  grid-template-areas:
    "title"
    "profile-picture";

  /* align-self: center; */
  justify-content: center;

  & ${Title} {
    grid-area: title;
    justify-content: center;
  }

  & ${Picture} {
    grid-area: profile-picture;
    display: flex;
    justify-content: center;
  }

  & ${A} {
    justify-self: center;
  }
`

export default function Header({ children, profilePicture, siteTitle }) {
  return (
    <HeaderLayout>
      <HeaderContentLayout>
        <Title>
          <Link isCursive isReverse to="/">
            {siteTitle}
          </Link>
        </Title>
        <Picture>{profilePicture}</Picture>
        <Paragraph center>Lets talk about Web</Paragraph>
        <A href="https://twitter.com/daniloster" target="_blank">
          <i className="fa fa-twitter" />
        </A>
        <div />
        {children}
      </HeaderContentLayout>
    </HeaderLayout>
  )
}

Header.Layout = HeaderLayout

Header.propTypes = {
  siteTitle: PropTypes.string,
  children: PropTypes.node,
}

Header.defaultProps = {
  siteTitle: ``,
  children: null,
}
