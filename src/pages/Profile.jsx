import styled from "styled-components";
import { dashboard } from "../styles/vitamins";
import { Stat } from "../components/Stat";
import { Chart as WeightChart } from "../components/BarChart"
import { Chart as Objectives } from "../components/LineChart"
import { Chart as Radar } from "../components/RadarChart"
import { Chart as KPI } from "../components/PieChart"
import { useEffect, useState } from "react";
import { getUser } from "../services";
import { useParams } from "react-router-dom";

const ProfileWrapper = styled.div`
  height: 779px;
  margin-left: 117px;
  padding: 100px;

  @media (max-width: 768px) {
    height: 100%;
  }
`

const Head = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-weight: 500;
    font-size: 48px;
    line-height: 24px;
    margin: 0 0 41px;
  }

  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    margin: 0 0 77px;
  }
`

const Body = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;

  @media (max-width: 768px) {
    align-items: center;
    flex-direction: column;
  }
`

const StatsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    flex-direction: row;
  }
`

const GraphWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: flex-end;
  height: 100%;
  width: 75%;
`

const GraphMain = styled.div`
  width: 100%;
  height: 50%;
`

const GraphSub = styled.div`
  display: flex;
  justify-content: space-between;
  height: 48%;
`

const Graph = styled.div`
  &:first-child {
    width: 100%;
    height: 50%;
    align-self: flex-start;
  }

  height: 46%;
  width: 31%;
  background-color: #FBFBFB;
  border-radius: 5px;
`

export const Profile = () => {
  const [userFirstName, setUserFirstName] = useState(null);
  const [userKeyData, setUserKeyData] = useState([]);
  const { id } = useParams();

  useEffect(() => {  
    const getUserData = async () => {
      const { data } = await getUser(id);
      setUserFirstName(data.userInfos.firstName);
      setUserKeyData(data.keyData);
    }  

    getUserData();

  }, [id]);

  return (
    <ProfileWrapper>
      <Head>
          {<h2>Bonjour {userFirstName}</h2>}
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </Head>
      <Body>
        <GraphWrapper>
          <Graph><WeightChart /></Graph>
          <Graph><Objectives /></Graph>
          <Graph><Radar /></Graph>
          <Graph><KPI /></Graph>
        </GraphWrapper>
        <StatsWrapper>
          {dashboard.map((stat, index) =>
              <Stat key={`dashboard-${index}`} logo={stat.logo} userKeyData={[Object.keys(userKeyData)[index], Object.values(userKeyData)[index]]} />
          )}
        </StatsWrapper>
      </Body>
    </ProfileWrapper>
  )
}