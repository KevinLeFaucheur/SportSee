import styled from "styled-components";
import { dashboard } from "../styles/vitamins";
import { Stat } from "../components/Stat";
import { Chart as WeightChart } from "../components/BarChart"
import { Chart as Objectives } from "../components/LineChart"
import { Chart as Radar } from "../components/RadarChart"
import { Chart as KPI } from "../components/PieChart"
import { useEffect, useState } from "react";
import { 
  getUser, 
  getUserAge, 
  getUserActivity, 
  getUserAverageSessions, 
  getUserPerformance 
} from "../services";
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
  const [user, setUser] = useState(null);
  const [userActivity, setUserActivity] = useState([]);
  const [userAverageSessions, setUserAverageSessions] = useState([]);
  const [userPerformance, setUserPerformance] = useState([]);
  const { id } = useParams();

  useEffect(() => {  
    // keyData: todayScore: userInfos:
    const getUserData = async () => {
      const user = await getUser(id);
      setUser(user);
    }  
    
    // sessions [7] day: date, kilogram: calories:
    const getUserActivityData = async () => {
      const userActivityData = await getUserActivity(id);
      setUserActivity(userActivityData);
    }  

    // sessions [7] day: sessionLength:
    const getUserAverageSessionsData = async () => {
      const userAverageSessionsData = await getUserAverageSessions(id);
      setUserAverageSessions(userAverageSessionsData);
    }  

    // data [6] kind [6]
    const getUserPerformanceData = async () => {
      const userPerformanceData = await getUserPerformance(id);
      setUserPerformance(userPerformanceData);
    }  

    getUserData();
    getUserActivityData();
    getUserAverageSessionsData();
    getUserPerformanceData();
  }, [id]);

  return (user &&
    <ProfileWrapper>
      {console.log(user.data.userInfos)}
      {console.log(userActivity)}
      {console.log(userAverageSessions)}
      {console.log(userPerformance)}
      <Head>
          {<h2>Bonjour {user.data.userInfos.firstName}</h2>}
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </Head>
      <Body>
        <GraphWrapper>
          <Graph><WeightChart activityData={userActivity.data} /></Graph>
          <Graph><Objectives averageSessionsData={userAverageSessions.data} /></Graph>
          <Graph><Radar performanceData={userPerformance.data} /></Graph>
          <Graph><KPI activityData={user.data} /></Graph>
        </GraphWrapper>
        <StatsWrapper>
          {dashboard.map((stat, index) => <Stat key={`dashboard-${index}`} stat={stat} />)}
        </StatsWrapper>
      </Body>
    </ProfileWrapper>
  )
}