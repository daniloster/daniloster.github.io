import React from "react"
import PropTypes from "prop-types"

export default function Html({ children }) {
  return <div dangerouslySetInnerHTML={{ __html: children }} />
}

Html.propTypes = {
  children: PropTypes.node,
}

Html.defaultProps = {
  children: null,
}
