import styled from "styled-components";

const Button = styled.button`
    width: 64px;
    height: 64px;
    background-color: white;
    border-radius: 6px;
    margin-bottom: 20px;
`

export const SideButton = ({ icon }) => {
    const { src, alt } = icon;
    return (
        <Button>
            <img src={src} alt={alt} />
        </Button>
    )
}