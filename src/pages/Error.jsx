import { Link, useLocation } from "react-router-dom"
import styled from "styled-components"

const ErrorWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 50vh;
    color: #E60000;
    
    h1 {
        font-size: 120px;
    }
    
    p {
        font-weight: 500;
        margin: 3vh 0;
    }
    
    & a, a:link, a:visited, a:focus, a:hover {
        font-weight: 500;
        color: #E60000;
        text-decoration: underline;
        margin: 3vh 0;
    }
`

export const Error = () => {
    const { state } = useLocation();
    console.log(state);

    return (
        <ErrorWrapper>
            <h1>Error</h1>
            <p>{state.error}</p>
            <Link to='/'>Retour vers la page d'accueil</Link>
        </ErrorWrapper>
    )
}