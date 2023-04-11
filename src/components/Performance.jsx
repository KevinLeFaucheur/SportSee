import { Radar, RadarChart, PolarGrid, ResponsiveContainer, PolarAngleAxis, Text, } from "recharts"; 
import { useEffect, useState } from "react";
import { Loading } from "./Loading";
import PropTypes from 'prop-types';

/** Renders angle labels with padding */
const renderPolarAngleAxis = ({ payload, x, y, cx, cy, fill, ...rest }) => {
  return (
    <Text
      {...rest}
      verticalAnchor="middle"
      fill="white"
      y={y + (y - cy) / 16}        // Calculates padding
      x={x + (x - cx) / 16}        // cx, cy: dot center coordinates
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
        outerRadius='52%'
        style={{ backgroundColor: '#282D30', borderRadius: '5px' }}
      >
        <PolarGrid radialLines={false} color='white' />
        <PolarAngleAxis 
          dataKey='kind' 
          tick={props => renderPolarAngleAxis(props)}
          fontFamily='Roboto' fontSize='0.7rem' fontWeight={500}
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