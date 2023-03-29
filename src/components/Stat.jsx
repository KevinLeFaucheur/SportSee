import { useEffect, useState } from "react";
import styled from "styled-components";
import { Loading } from "./Loading";
import PropTypes from 'prop-types';

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

const StatCount = styled.p`
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
    color: #74798C;
`

export const Stat = ({ icon, userKeyData }) => {
    const { src, alt } = icon;
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {  
      setIsLoading(userKeyData === undefined);
    }, [userKeyData]);

    return (isLoading ? <Loading /> :
        <StatWrapper>
            <StatIcon>
                <img src={src} alt={alt} />
            </StatIcon>
            <StatText>
                <StatCount>{userKeyData.count}</StatCount>
                <StatLabel>{userKeyData.label}</StatLabel>
            </StatText>
        </StatWrapper>
    )
}

Stat.propTypes = {
    userKeyData: PropTypes.shape({
        count: PropTypes.string,
        label: PropTypes.string,
    })
};