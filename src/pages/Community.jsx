import styled from "styled-components"

const CommunityWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 50vh;
    color: black;
    
    h1 {
        font-size: 36px;
    }
`

export const Community = () => {
    return (
        <CommunityWrapper>
            <h1>Community</h1>
        </CommunityWrapper>
    )
}