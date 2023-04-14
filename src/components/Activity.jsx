import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"; 
import { useEffect, useState } from "react";
import { Loading } from "./Loading";
import { ErrorMessage } from "./ErrorMessage";
import PropTypes from 'prop-types';

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ backgroundColor: '#E60000', color: 'white', fontSize: '7px', padding: '10px' }}>
        <p style={{ margin: '5 0' }}>{`${payload[0].value}g`}</p>
        <p style={{ margin: '5 0' }}>{`${payload[1].value}KCal`}</p>
      </div>
    );
  }
  return null;
};

export const Activity = ({ userActivity }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasNetworkError, setHasNetworkError] = useState(false);

  useEffect(() => {  
    setIsLoading(userActivity === undefined);
    setHasNetworkError(userActivity instanceof Error);
  }, [userActivity]);

  return (isLoading ? <Loading /> :
          hasNetworkError ? <ErrorMessage error={userActivity} /> :
  <ResponsiveContainer height='100%' width='100%'>
      <BarChart
        data={userActivity}
        width={700} height={400}
        margin={{ top: 0, right: 0, left: 50, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="1 3" vertical={false} />
        <XAxis dataKey='day' />
        <YAxis tickCount={3} orientation='right' axisLine={false} strokeOpacity={0}/>
        <Tooltip content={<CustomTooltip />} wrapperStyle={{ outline: "none" }} />
        <Legend 
          verticalAlign="top" align="right" iconType="circle" iconSize={8} height={70}
          formatter={(value) => <span style={{ color: '#74798C' }}>{value}</span>} 
        />
        <Bar dataKey='kilogram' name="Poids (kg)" barSize={7} fill="#282D30" radius={5} />
        <Bar dataKey='calories' name="Calories brûlées (kCal)" barSize={7} fill="#E60000" radius={5} />
        <text 
          dy={+12} width={200} textAnchor='start' verticalanchor='start'
          style={{ fontSize: 15, fontWeight: 500, fill: '#20253A' }}
        >
        Activité quotidienne
        </text>
      </BarChart>
    </ResponsiveContainer>
  )
};

Activity.propTypes = {
  userActivity: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        day: PropTypes.string,
        kilogram: PropTypes.number,
        calories: PropTypes.number,
      })
    ),
    PropTypes.instanceOf(Error)
  ])
};