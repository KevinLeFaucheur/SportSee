import styled from "styled-components"

const Message = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

export const ErrorMessage = ({ error }) => {
  return (
    <Message>
      <p>{error?.message}</p>
    </Message>
  )
}