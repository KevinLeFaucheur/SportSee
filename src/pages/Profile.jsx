import styled from "styled-components";
import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { Stat } from "../components/Stat";
import { Activity } from "../components/Activity"
import { AverageSessions } from "../components/AverageSessions"
import { Performance } from "../components/Performance"
import { Score } from "../components/Score"
import { getUser, getUserActivity, getUserAverageSessions, getUserPerformance } from "../services";
import { getPerformanceModel, getStatModel, getAverageSessionsModel, getUserModel, getActivityModel } from "../models/Models";
import { statsIcons } from "../styles/icons";
import * as mocks from '../mocks/api_mock' 

const apiIsMocked = false;

const users = [
  { id: '12' },
  { id: '18' },
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

// const GraphMain = styled.div`
//   width: 100%;
//   height: 50%;
// `

// const GraphSub = styled.div`
//   display: flex;
//   justify-content: space-between;
//   height: 48%;
// `

const Graph = styled.div`
  &:first-child {
    width: 100%;
    height: 50%;
    align-self: flex-start;
    padding: 24px;
  }

  height: 46%;
  width: 31%;
  background-color: #FBFBFB;
  border-radius: 5px;
`

export const Profile = () => {
  const [userData, setUserData] = useState();
  const [userKeyData, setUserKeyData] = useState();
  const [userActivity, setUserActivity] = useState();
  const [userAverageSessions, setUserAverageSessions] = useState();
  const [userPerformance, setUserPerformance] = useState();
  const [userNotFound, setUserNotFound] = useState(false);
  const { id } = useParams();

  const navigate = useNavigate();
  
  useEffect(() => {  
    
    if(!users.find(user => user.id === id)) {
      setUserNotFound(true);
      return;
    }

    // When API is mocked
    if(apiIsMocked) {
      console.log(mocks);
      setUserData(mocks.user);
      setUserKeyData(mocks.stats);
      setUserActivity(mocks.activity);
      setUserAverageSessions(mocks.averageSessions);
      setUserPerformance(mocks.performance);
      return;
    }
      
    // Resolves and models all API data succesfully received
    Promise
      .all([
        getUser(id), 
        getUserActivity(id), 
        getUserAverageSessions(id), 
        getUserPerformance(id)
      ])
      .then(results => {
        setUserData(getUserModel(results[0].data));
        setUserKeyData(getStatModel(results[0].data.keyData));
        setUserActivity(getActivityModel(results[1].data));
        setUserAverageSessions(getAverageSessionsModel(results[2].data));
        setUserPerformance(getPerformanceModel(results[3].data));
      });
  }, [id]);

  // return (userNotFound ? navigate("../404", { state: { error: 'This user was not found.' }}) :
  return (userNotFound ? <Navigate to='../404' state={{ error: 'This user was not found.' }}/> :
    <ProfileWrapper>
      <Head>
          {<h2>Bonjour <FirstName>{userData?.firstName}</FirstName></h2>}
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </Head>
      <Body>
        <GraphWrapper>
          <Graph><Activity userActivity={userActivity} /></Graph>
          <Graph><AverageSessions userAverageSessions={userAverageSessions} /></Graph>
          <Graph><Performance userPerformance={userPerformance}/></Graph>
          <Graph><Score userData={userData} /></Graph>
        </GraphWrapper>
        <StatsWrapper>
          {userKeyData && statsIcons.map((icon, index) =>
              <Stat key={`dashboard-${index}`} icon={icon} userKeyData={userKeyData[index]} />
          )}
        </StatsWrapper>
      </Body>
    </ProfileWrapper>
  )
}