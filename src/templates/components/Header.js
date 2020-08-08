import React from 'react'

export default function Header({ children = null, tag: Element = 'h2' }) {
  return <Element>{children}</Element>
}
