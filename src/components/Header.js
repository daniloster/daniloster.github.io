import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Link from "../templates/components/Link"
import A from "../templates/components/A"

const Title = styled.h1.attrs({ className: "cursive" })`
  text-align: center;
  width: 100%;
  height: 75px;
  margin: 0;
  background-color: inherit;

  @media (max-width: 640px) {
    position: sticky;
    top: 45px;
  }
`

const Picture = styled.div`
  width: 100%;
  padding: 0 0 15px 0;
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
  position: relative;
`

const HeaderContentLayout = styled.div.attrs({ className: "monospace" })`
  width: 100%;
  position: relative;
  background-color: inherit;

  @media (min-width: 641px) {
    position: sticky;
    top: 45px;
  }

  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: minmax(1px, min-content) minmax(1px, min-content) 60px 16px auto;
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
        <Paragraph center>Lets talk about JS</Paragraph>
        <A href="https://twitter.com/daniloster" target="_blank">
          <i class="fa fa-twitter" />
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
