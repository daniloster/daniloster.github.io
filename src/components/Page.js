/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import "./layout.css"
// import "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"

import Footer from "./Footer"
import Header from "./Header"
import Main from "./Main"
import ProfilePicture from "./ProfilePicture"
import getColor from "../templates/components/getColor"
import { MIN_WIDTH_COLUMNS } from "../templates/components/breakpoints"
import SEO from "./seo"

const PageLayout = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: auto;
  position: relative;

  display: grid;

  grid-template-columns: 100%;
  grid-template-rows: min-content minmax(min-content, 100%) auto;
  grid-template-areas:
    "header"
    "main"
    "footer";

  @media (min-width: ${MIN_WIDTH_COLUMNS}) {
    grid-template-columns: 360px minmax(1px, 100%);
    grid-template-rows: minmax(min-content, 100%) auto;
    grid-template-areas:
      "header main"
      "header footer";
  }

  & ${Header.Layout} {
    grid-area: header;
    padding: 25px 0 0 0;
  }

  & ${Main.Layout} {
    grid-area: main;
    padding: 25px 15px 15px 15px;
  }

  & ${Footer.Layout} {
    grid-area: footer;
    padding: 15px;
  }

  color: ${getColor("default", "xdark")};
  & [data-cursive] {
    font-family: "Pacifico", cursive, sans-serif;
  }
`

export default function Page({ children, title, keywords }) {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
          allImageSharp(
            filter: { resize: { originalName: { regex: "/icon/" } } }
          ) {
            nodes {
              id
              original {
                width
                height
                src
              }
              resize {
                originalName
              }
            }
          }
          allFile(
            filter: { name: { eq: "profile" } }
            sort: { order: DESC, fields: [birthtimeMs] }
          ) {
            nodes {
              id
              publicURL
              name
            }
          }
        }
      `}
      render={data => {
        const images = data.allImageSharp.nodes.map(imageSharp => imageSharp)
        return (
          <PageLayout>
            <SEO title={title} keywords={keywords} images={images} />
            <Header
              siteTitle={data.site.siteMetadata.title}
              profilePicture={
                <ProfilePicture
                  data-profile-picture
                  {...data.allFile.nodes[0]}
                />
              }
            />
            <Main>{children}</Main>
            <Footer />
          </PageLayout>
        )
      }}
    />
  )
}

Page.Layout = PageLayout

Page.propTypes = {
  children: PropTypes.node.isRequired,
}
