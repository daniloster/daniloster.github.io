import styled from "styled-components"

export default styled.p`
  text-align: ${(props) => (props.textAlign || 'left')};
`
