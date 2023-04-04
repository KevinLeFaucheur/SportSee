import styled from "styled-components"

const SettingsWrapper = styled.div`
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

export const Settings = () => {
    return (
        <SettingsWrapper>
            <h1>Settings</h1>
        </SettingsWrapper>
    )
}