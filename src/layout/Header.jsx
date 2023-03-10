import { NavLink } from "react-router-dom"
import styled from "styled-components"

const HeaderWrapper = styled.div`
    width: 100%;
    height: 91px;
    background-color: black;
`

export const Header = () => {
    return (
        <HeaderWrapper>
            <NavLink to='/'>Accueil</NavLink>
            <NavLink to='/profile'>Profile</NavLink>
            <NavLink to='/settings'>Réglages</NavLink>
            <NavLink to='/community'>Communauté</NavLink>
        </HeaderWrapper>
    )
}