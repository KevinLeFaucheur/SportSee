import { useEffect, useState } from "react";
import { 
    Bar, 
    BarChart, 
    CartesianGrid, 
    Customized, 
    Legend, 
    ResponsiveContainer, 
    Text, 
    Tooltip, 
    XAxis, 
    YAxis 
} from "recharts"; 
import PropTypes from 'prop-types';
import { Loading } from "./Loading";

const CustomTooltip = ({ active, payload, label }) => {
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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {  
    setIsLoading(userActivity === undefined);
  }, [userActivity]);

  return (isLoading ? <Loading /> :
  <ResponsiveContainer height='100%' width='100%'>
      <BarChart
        width={700}
        height={300}
        data={userActivity}
        margin={{
          top: 0,
          right: 0,
          left: 50,
          bottom: 0,
        }}>
        <CartesianGrid strokeDasharray="1 3" vertical={false} />
        <XAxis dataKey='day' tickFormatter={(_, index) => index + 1} />
        <YAxis tickCount={3} orientation='right' axisLine={false} strokeOpacity={0}/>
        <Tooltip content={<CustomTooltip />} wrapperStyle={{ outline: "none" }} />
        <Legend verticalAlign="top" align="right" iconType="circle" iconSize={8} height={100} />
        <Bar dataKey='kilogram' name="Poids (kg)" barSize={7} fill="#282D30" />
        <Bar dataKey='calories' name="Calories brûlées (kCal)" barSize={7} fill="#E60000" />
        <text
          dy={+12}
          style={{ fontSize: 15, fontWeight: 500, fill: '#20253A' }}
          width={200}
          // scaletofit={true}
          textAnchor='start'
          verticalanchor='start'
        >Activité quotidienne
        </text>
      </BarChart>
    </ResponsiveContainer>
  )
};

Activity.propTypes = {
  userActivity: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string,
      kilogram: PropTypes.number,
      calories: PropTypes.number,
    })
  )
};