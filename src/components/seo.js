/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

// href: "src/images/favicon-16x16.png",
// href: "src/images/apple-touch-icon.png",
// href: "src/images/favicon-32x32.png",
const faviconsMap = {
  "apple-touch-icon.png": {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "src/images/apple-touch-icon.png",
  },
  "favicon-32x32.png": {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "src/images/favicon-32x32.png",
  },
  "favicon-16x16.png": {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "src/images/favicon-16x16.png",
  },
}

const { useMemo } = React

function getFavIcons(images) {
  return images
    .filter(({ resize: { originalName } }) => faviconsMap[originalName])
    .map(image => ({
      ...faviconsMap[image.resize.originalName],
      href: image.original.src,
    }))
}

function SEO({ description, lang, meta, images, keywords, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const favicons = useMemo(() => getFavIcons(images), [images])
  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      link={favicons}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : []
        )
        .concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      original: {
        width: PropTypes.number,
        height: PropTypes.number,
        src: PropTypes.string,
      },
      resize: {
        originalName: PropTypes.string,
      },
    })
  ).isRequired,
}

export default SEO
