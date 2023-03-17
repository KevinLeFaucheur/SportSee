import { NavLink } from "react-router-dom"
import styled from "styled-components"
import { HeaderLogo } from "../components/HeaderLogo"
import logoSportSee from "../assets/logo_sportsee.svg"

const logo = { src: logoSportSee, alt: 'SportSee' };

const HeaderWrapper = styled.div`
    width: 100%;
    height: 91px;
    background-color: black;
`

const NavBar = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
`

const StyledLink = styled(NavLink)`
    line-height: 24px;
    font-size: 24px;
`

export const Header = () => {
    return (
        <HeaderWrapper>
            <NavBar >
                <HeaderLogo logo={logo} />
                <StyledLink to='/'>Accueil</StyledLink>
                <StyledLink to='/profile'>Profile</StyledLink>
                <StyledLink to='/settings'>Réglages</StyledLink>
                <StyledLink to='/community'>Communauté</StyledLink>
            </NavBar>
        </HeaderWrapper>
    )
}