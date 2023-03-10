import styled from "styled-components";
import { dashboard } from "../styles/vitamins";
import { Stat } from "../components/Stat";

const HomeWrapper = styled.div`
  height: 779px;
  width: 1126px;

  margin-left: 117px;
  padding: 100px;
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
`

const StatsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`

const GraphWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: flex-end;
  height: 100%;
  width: 70%;
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

export const Home = () => {
  {console.log(dashboard)}
  return (
    <HomeWrapper>
      <Head>
          <h2>Bonjour Thomas</h2>
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </Head>
      <Body>
        <GraphWrapper>
          <Graph></Graph>
          <Graph></Graph>
          <Graph></Graph>
          <Graph></Graph>
        </GraphWrapper>
        <StatsWrapper>
          {dashboard.map((stat, index) => <Stat key={`dashboard-${index}`} stat={stat} />)}
        </StatsWrapper>
      </Body>
    </HomeWrapper>
  )
}