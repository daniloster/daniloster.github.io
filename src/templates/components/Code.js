import React from "react"
import PropTypes from "prop-types"
import { Prism as Dark } from "react-syntax-highlighter"
import { Light } from "react-syntax-highlighter"
import {
  atomDark,
  dark,
  darcula,
  okaidia,
  prism,
  twilight,
} from "react-syntax-highlighter/dist/esm/styles/prism"
import docco from "react-syntax-highlighter/dist/esm/styles/hljs/docco"
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx"

// References for languages in Prism
// https://github.com/conorhastings/react-syntax-highlighter/blob/2d974ba05a93224aef34781d7b9a96e0080353cc/AVAILABLE_LANGUAGES_PRISM.MD
// References for styles in Prism
// https://github.com/conorhastings/react-syntax-highlighter/blob/2d974ba05a93224aef34781d7b9a96e0080353cc/AVAILABLE_STYLES_PRISM.MD

const { useEffect } = React

const HighlighterTypes = {
  atomDark: props => <Dark {...props} style={atomDark} />,
  darcula: props => <Dark {...props} style={darcula} />,
  dark: props => <Dark {...props} style={dark} />,
  okaidia: props => <Dark {...props} style={okaidia} />,
  prism: props => <Dark {...props} style={prism} />,
  light: props => <Light {...props} style={docco} />,
  twilight: props => <Dark {...props} style={twilight} />,
}

export default function Code({ extension, lang, theme, code, wrapLines }) {
  useEffect(() => {
    if (extension === "jsx") {
      SyntaxHighlighter.registerLanguage("jsx", jsx)
    }
  }, [])
  const SyntaxHighlighter = HighlighterTypes[theme]

  return <SyntaxHighlighter language={lang}>{code}</SyntaxHighlighter>
}

Code.propTypes = {
  code: PropTypes.string,
  extension: PropTypes.string,
  lang: PropTypes.string,
  theme: PropTypes.string,
  wrapLines: PropTypes.bool,
}

Code.defaultProps = {
  code: null,
  extension: null,
  lang: "javascript",
  theme: "light",
  wrapLines: true,
}
