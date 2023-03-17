import styled from "styled-components"
import { Link } from "react-router-dom"
import { SideButton } from "../components/SideButton"
import iconZen from "../assets/icon_zen.svg"
import iconSwim from "../assets/icon_swim.svg"
import iconBicycle from "../assets/icon_bicycle.svg"
import iconLift from "../assets/icon_lift.svg"

const icons = [
    {src: iconZen, alt: 'Zen'}, 
    {src: iconSwim, alt: 'Swimming'}, 
    {src: iconBicycle, alt: 'Bicycle'}, 
    {src: iconLift, alt: 'Lifting'}
];

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

const Copyright = styled.p`
    position: absolute;
    bottom: 18%;
    font-weight: 500;
    font-size: 12px;
    text-align: left;
    width: max-content;
    margin: 0;
    color: white;
    transform: rotate(-90deg);
`

export const Side = () => {
    return (
        <SideWrapper>
            {icons.map(
                (icon, index) =>  
                    <Link key={`button-${index}`} to='/profile' >
                        <SideButton icon={icon} />
                    </Link>
            )}
            <Copyright>Copiryght, SportSee 2020</Copyright>
        </SideWrapper>
    )
}