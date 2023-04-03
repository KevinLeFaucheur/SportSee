import React from 'react'
import styled from 'styled-components'

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

export const Loading = () => {
  return (
    <LoadingWrapper>
      <p>Loading</p>
    </LoadingWrapper>
  )
}
