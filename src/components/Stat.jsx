import styled from "styled-components";

const StatWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: auto;
  width: 258px;
  background-color: #FBFBFB; 
  border-radius: 5px;
  padding: 32px;
`

const StatIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    background-color: rgba(255, 0, 0 , 0.07);
    border-radius: 6px;
`

const StatText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100px;

  p {
    margin: 0;
  }
`

const StatAmount = styled.p`
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: left;
`

const StatLabel = styled.p`
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: left;
`

export const Stat = ({ stat }) => {
    const { logo, amount, label } = stat;

    return (
        <StatWrapper>
            <StatIcon dangerouslySetInnerHTML={{__html: logo}}/>
            <StatText>
                <StatAmount>{amount}</StatAmount>
                <StatLabel>{label}</StatLabel>
            </StatText>
        </StatWrapper>
    )
}