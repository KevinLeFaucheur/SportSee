import styled from "styled-components"
import { Link } from "react-router-dom"
import { SideButton } from "../components/SideButton"
import { sideBarIcons } from "../styles/icons"

const SideWrapper = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	z-index: -1;
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

	@media (max-width: 1024px) {
		bottom: 12%;
	}
`

export const Side = () => {
	return (
		<SideWrapper>
			{sideBarIcons.map(
				(icon, index) =>  
					<Link key={`button-${index}`} to='/profile' >
						<SideButton icon={icon} />
					</Link>
			)}
			<Copyright>Copyright, SportSee 2023</Copyright>
		</SideWrapper>
	)
}