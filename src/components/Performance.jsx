import { Radar, RadarChart, PolarGrid, ResponsiveContainer, PolarAngleAxis, Text, } from "recharts"; 
import { useEffect, useState } from "react";
import { Loading } from "./Loading";
import PropTypes from 'prop-types';


const renderPolarAngleAxis = ({ payload, x, y, cx, cy, fill, ...rest }) => {
  return (
    <Text
      {...rest}
      verticalAnchor="middle"
      fill="white"
      y={y + (y - cy) / 8}
      x={x + (x - cx) / 8}
    >
      {payload.value}
    </Text>
  );
}

export const Performance = ({ userPerformance }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {  
    setIsLoading(userPerformance === undefined);
  }, [userPerformance]);

  return (isLoading ? <Loading /> :
    <ResponsiveContainer height='100%' width='100%'>
      <RadarChart 
        data={userPerformance} 
        outerRadius={70}
        style={{ backgroundColor: '#282D30', borderRadius: '5px' }}
        margin={{ top: 15, right: 15, left: 15, bottom: 15 }}
      >
        <PolarGrid radialLines={false} color='white' />
        <PolarAngleAxis 
          dataKey='kind' 
          tick={props => renderPolarAngleAxis(props)}
          fontFamily='Roboto' fontSize={12} fontWeight={500}
        />
        <Radar 
          dataKey="value" 
          stroke="#E60000" fill="#E60000" fillOpacity={0.8}
        />
      </RadarChart>
    </ResponsiveContainer>
  )
};

Performance.propTypes = {
  userPerformance: PropTypes.arrayOf(
    PropTypes.shape({
      kind: PropTypes.string,
      value: PropTypes.number,
    })
  )
};