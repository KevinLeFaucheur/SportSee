import { Link } from "react-router-dom";
import styled from "styled-components";

const LogoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 178px;
`

export const HeaderLogo = ({ logo }) => {
    const { src, alt } = logo;
    
    return (
        <Link to='/'>
            <LogoWrapper>
                <img src={src} alt={alt} />
            </LogoWrapper>
        </Link>
    )
}