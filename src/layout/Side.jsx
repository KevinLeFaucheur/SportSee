import styled from "styled-components"
import { SideButton } from "../components/SideButton"

const SideWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 117px;
    height: 100%;
    background-color: black;
`

export const Side = () => {
    return (
        <SideWrapper>
            <SideButton></SideButton>
            <SideButton></SideButton>
            <SideButton></SideButton>
            <SideButton></SideButton>
        </SideWrapper>
    )
}