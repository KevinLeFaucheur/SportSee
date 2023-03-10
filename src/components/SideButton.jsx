import styled from "styled-components";
import logo from "../styles/temp.svg"

const Button = styled.button`
    width: 64px;
    height: 64px;
    background-color: white;
    border-radius: 6px;
    margin-bottom: 20px;
`

export const SideButton = () => {
    return (
        <Button><img src={logo} alt="Zen" />
        </Button>
    )
}