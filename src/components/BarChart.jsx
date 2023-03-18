import { useEffect, useState } from "react";
import { 
    Bar, 
    BarChart, 
    CartesianGrid, 
    Legend, 
    ResponsiveContainer, 
    Tooltip, 
    XAxis, 
    YAxis 
} from "recharts"; 
import PropTypes from 'prop-types';
import { Loading } from "./Loading";

export const Chart = ({ userActivity }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {  
    setIsLoading(userActivity === undefined ? true : false);
  }, [userActivity]);

  return (isLoading ? <Loading /> :
    <ResponsiveContainer height='100%' width='100%'>
      <BarChart
        width={700}
        height={300}
        data={userActivity.sessions}
        margin={{
          top: 0,
          right: 0,
          left: 50,
          bottom: 0,
        }}>
        <CartesianGrid strokeDasharray="1 3" />
        <XAxis dataKey='day' tickFormatter={(_, index) => index + 1} />
        <YAxis tickCount={3} orientation='right' axisLine={false} />
        <Tooltip />
        <Legend verticalAlign="top" align="right" iconType="circle" iconSize={8} height={100} />
        <Bar dataKey='kilogram' name="Poids (kg)" barSize={7} fill="#282D30" />
        <Bar dataKey='calories' name="Calories brûlées (kCal)" barSize={7} fill="#E60000" />
      </BarChart>
    </ResponsiveContainer>
  )
};

Chart.propTypes = {
  userActivity: PropTypes.shape({
    sessions: PropTypes.arrayOf(
      PropTypes.shape({
        day: PropTypes.string,
        kilogram: PropTypes.number,
        calories: PropTypes.number,
    })),
    userId: PropTypes.number
  })
};