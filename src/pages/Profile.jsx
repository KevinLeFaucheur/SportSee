import styled from "styled-components";
import { Stat } from "../components/Stat";
import { Chart as WeightChart } from "../components/BarChart"
import { Chart as Objectives } from "../components/LineChart"
import { Chart as Radar } from "../components/RadarChart"
import { Chart as KPI } from "../components/PieChart"
import { useEffect, useState } from "react";
import { getUser, getUserActivity, getUserAverageSessions, getUserPerformance } from "../services";
import { useParams } from "react-router-dom";
import iconCalorie from "../assets/icon_calorie.svg"
import iconProtein from "../assets/icon_protein.svg"
import iconGlucide from "../assets/icon_glucide.svg"
import iconLipid from "../assets/icon_lipid.svg"

const icons = [
    {src: iconCalorie, alt: 'Calories'}, 
    {src: iconProtein, alt: 'Proteins'}, 
    {src: iconGlucide, alt: 'CarboHydrates'}, 
    {src: iconLipid, alt: 'Lipids'}
];

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

const FirstName = styled.span`
  color: rgb(230, 0, 0);
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
  const [userData, setUserData] = useState();
  const [userActivity, setUserActivity] = useState();
  const [userAverageSessions, setUserAverageSessions] = useState();
  const [userPerformance, setUserPerformance] = useState();
  const { id } = useParams();

  useEffect(() => {  
    const getUserData = async () => {
      const { data } = await getUser(id);
      setUserData(data);
    }  

    const getUserActivityData = async () => {
      const { data } = await getUserActivity(id);
      setUserActivity(data);
    }  

    const getUserAverageSessionsData = async () => {
      const { data } = await getUserAverageSessions(id);
      setUserAverageSessions(data);
    }  

    const getUserPerformanceData = async () => {
      const { data } = await getUserPerformance(id);
      setUserPerformance(data);
    }  

    // const getAllUserData = async () => {
      
      
    //   const { userData } = await getUser(id);
    //   const { activityData } = await getUserActivity(id);
    //   const { sessionsData } = await getUserAverageSessions(id);
    //   const { perfData } = await getUserPerformance(id);
      
    //   setUserData(userData);
    //   setUserActivity(activityData);
    //   setUserAverageSessions(sessionsData);
    //   setUserPerformance(perfData);
    // }  
    
    // getAllUserData();
    // setLoading(false);
    getUserPerformanceData();
    getUserAverageSessionsData();
    getUserActivityData();
    getUserData();

  }, [id]);

  return (
    <ProfileWrapper>
      <Head>
          {<h2>Bonjour <FirstName>{userData && userData.userInfos.firstName}</FirstName></h2>}
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </Head>
      <Body>
        <GraphWrapper>
          <Graph><WeightChart userActivity={userActivity} /></Graph>
          <Graph><Objectives userAverageSessions={userAverageSessions} /></Graph>
          <Graph><Radar userPerformance={userPerformance}/></Graph>
          <Graph>{userData && <KPI userData={userData} />}</Graph>
        </GraphWrapper>
        <StatsWrapper>
          {userData && icons.map((icon, index) =>
              <Stat key={`dashboard-${index}`} icon={icon} userKeyData={[Object.keys(userData.keyData)[index], Object.values(userData.keyData)[index]]} />
          )}
        </StatsWrapper>
      </Body>
    </ProfileWrapper>
  )
}