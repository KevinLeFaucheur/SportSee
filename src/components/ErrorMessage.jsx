import styled from "styled-components"

const Message = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 26px;
  color: #282D30;
  background-color: #FBFBFB;
  border-radius: 5px;
`

export const ErrorMessage = ({ error }) => {
  return (
    <Message>
      <p>{error?.message}</p>
    </Message>
  )
}