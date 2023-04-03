import { Link } from "react-router-dom"
import styled from "styled-components"

const HomeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 50vh;

    a, a:link, a:visited, a:focus, a:hover {
        background-color: #E60000;
        font-weight: 500;
        margin: 1vh 0;
        padding: 15px 30px;
        border-radius: 10px;
    }
`

export const Home = () => {
    return (
        <HomeWrapper>
            <Link to={'/profile/12'} >User 12</Link>
            <Link to={'/profile/18'} >User 18</Link>
        </HomeWrapper>
    )
}