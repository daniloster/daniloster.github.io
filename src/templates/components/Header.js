import React from 'react'

export default function Header({ children = null, tag: Element = 'h2', ...props }) {
  return <Element {...props}>{children}</Element>
}
