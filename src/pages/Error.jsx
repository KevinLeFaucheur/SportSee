import { Link } from "react-router-dom"
import styled from "styled-components"

const ErrorWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    color: #E60000;
    
    h1 {
        font-size: 80px;
    }
    
    p {
        
    }
    
    a {
        color: #E60000;
    }
`

export const Error = () => {
    return (
        <ErrorWrapper>
            <h1>Error</h1>
            <p>Message d'erreur</p>
            <Link to='/'>Retour vers la page d'accueil</Link>
        </ErrorWrapper>
    )
}