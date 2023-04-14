import { getUser, getUserActivity, getUserAverageSessions, getUserPerformance } from "../services";
import { getPerformanceModel, getStatModel, getAverageSessionsModel, getUserModel, getActivityModel, getScoreModel } from "../models/Models";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Stat } from "../components/Stat";
import { Activity } from "../components/Activity"
import { AverageSessions } from "../components/AverageSessions"
import { Performance } from "../components/Performance"
import { Score } from "../components/Score"
import styled from "styled-components";
import * as mocks from '../mocks/api_mock' 
import { ErrorMessage } from "../components/ErrorMessage";

const API_IS_MOCKED = false;

const ProfileWrapper = styled.div`
  height: 78%;
  margin-left: 117px;
  padding: 6.5%;

  @media (max-width: 1024px) {
    height: 80%;
    padding: 6.5% 2vw;
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
    margin: 0 0 6vh;
  }
`

const FirstName = styled.span`
  color: rgb(230, 0, 0);
`

const Body = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;

  @media (max-width: 1024px) {
    height: 95%;
  }
`

const GraphWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: flex-end;
  height: 100%;
  width: 75%;

  @media (max-width: 1024px) {
    width: 80%;
  }
`

const Graph = styled.div`
  &:first-child {
    width: 100%;
    height: 50%;
    align-self: flex-start;
    padding: 24px;
  }

  height: 46%;
  width: 32%;
  background-color: #FBFBFB;
  border-radius: 5px;
`

const StatsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 19%;

  @media (max-width: 1024px) {
    width: 19%;
  }
`

export const Profile = () => {
  const [userData, setUserData] = useState();
  const [userScore, setUserScore] = useState();
  const [userKeyData, setUserKeyData] = useState();
  const [userActivity, setUserActivity] = useState();
  const [userAverageSessions, setUserAverageSessions] = useState();
  const [userPerformance, setUserPerformance] = useState();
  const [hasNetworkError, setHasNetworkError] = useState();
  const { id } = useParams();
  
  useEffect(() => {  

    // When API is mocked: data has already the correct model 
    if(API_IS_MOCKED) {
      setUserData(mocks.user);
      setUserScore(mocks.user.score);
      setUserKeyData(mocks.stats);
      setUserActivity(mocks.activity);
      setUserAverageSessions(mocks.averageSessions);
      setUserPerformance(mocks.performance);
      return;
    }
      
    /** When API is used: resolves and models all API data succesfully received.
     *  results is an array of the fulfillment values */
    Promise
      .all([
        getUser(id), 
        getUserActivity(id), 
        getUserAverageSessions(id), 
        getUserPerformance(id)
      ])
      .then(results => {
        const error = results.find(e => e instanceof Error);
        if(error instanceof Error) {
          setHasNetworkError(error);
          return;
        }
        setUserData(getUserModel(results[0].data));
        setUserScore(getScoreModel(results[0].data));
        setUserKeyData(getStatModel(results[0].data.keyData));
        setUserActivity(getActivityModel(results[1].data));
        setUserAverageSessions(getAverageSessionsModel(results[2].data));
        setUserPerformance(getPerformanceModel(results[3].data));
      });
  }, [id]);

  return (
    <ProfileWrapper>
      <Head>
          {<h2>Bonjour <FirstName>{userData?.firstName}</FirstName></h2>}
          <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
      </Head>
      {hasNetworkError ? <ErrorMessage error={hasNetworkError} /> :
      <Body>
        <GraphWrapper>
          <Graph><Activity userActivity={userActivity} /></Graph>
          <Graph><AverageSessions userAverageSessions={userAverageSessions} /></Graph>
          <Graph><Performance userPerformance={userPerformance}/></Graph>
          <Graph><Score userScore={userScore?.score} /></Graph>
        </GraphWrapper>
        <StatsWrapper>
          {userKeyData && userKeyData.map((data, index) =>
              <Stat key={`dashboard-${index}`} icon={data.icon} userKeyData={data} />
          )}
        </StatsWrapper>
      </Body>}
    </ProfileWrapper>
  )
}