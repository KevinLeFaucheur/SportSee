import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getUser } from "../services";
import { Loading } from "./Loading";

const StatWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: auto;
  width: 258px;
  background-color: #FBFBFB; 
  border-radius: 5px;
  padding: 32px;

    @media (max-width: 768px) {
        width: 48%;
    }
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

export const Stat = ({ icon, userKeyData }) => {
    const { src, alt } = icon;
    const [label, amount] = userKeyData;
    // const [label, setLabel] = useState();
    // const [amount, setAmount] = useState();
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {  
        // if(userKeyData) {
        //     setLabel(userKeyData.label)
        //     setAmount(userKeyData.amount)
        // }
      setIsLoading(userKeyData === undefined);
    }, [userKeyData]);

    return (isLoading ? <Loading /> :
        <StatWrapper>
            <StatIcon>
                <img src={src} alt={alt} />
            </StatIcon>
            <StatText>
                <StatAmount>{label && (label.charAt(0).toUpperCase() + label.slice(1)).replace(/Count/g, '')}</StatAmount>
                <StatLabel>{amount && amount + 'g'}</StatLabel>
            </StatText>
        </StatWrapper>
    )
}