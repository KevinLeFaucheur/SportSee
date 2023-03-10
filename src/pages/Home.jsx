import styled from "styled-components";

const HomeWrapper = styled.div`
  height: 779px;
  width: 1126px;

  margin-left: 117px;
  padding: 100px;
`

const Head = styled.div`
  display: flex;
  flex-direction: column;
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

const Stat = styled.div`
  display: flex;
  justify-content: space-between;
  height: auto;
  width: 258px;
  background-color: #FBFBFB; 
  border-radius: 5px;
  padding: 32px;
`

const StatIcon = styled.div`
  width: 60px;
  height: 60px;
  background-color: #FF0000;
  mix-blend-mode: normal;
  opacity: 0.07;
  border-radius: 6px;
`

const StatText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    margin: 0;
  }
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
          <Stat>
            <StatIcon />
            <StatText>
              <p>1,930kCal</p>
              <p>Calories</p>
            </StatText>
          </Stat>
          <Stat>
            <StatIcon />
            <StatText>
              <p>1,930kCal</p>
              <p>Calories</p>
            </StatText>
          </Stat>
          <Stat>
            <StatIcon />
            <StatText>
              <p>1,930kCal</p>
              <p>Calories</p>
            </StatText>
          </Stat>
          <Stat>
            <StatIcon />
            <StatText>
              <p>1,930kCal</p>
              <p>Calories</p>
            </StatText>
          </Stat>
        </StatsWrapper>
      </Body>
    </HomeWrapper>
  )
}