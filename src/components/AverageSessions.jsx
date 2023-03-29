import { useEffect, useState } from "react";
import { 
    Line, 
    LineChart, 
    CartesianGrid, 
    Legend, 
    ResponsiveContainer, 
    Tooltip, 
    XAxis, 
    YAxis 
} from "recharts"; 
import PropTypes from 'prop-types';
import { Loading } from "./Loading";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ backgroundColor: 'white', fontSize: '7px', padding: '10px' }}>
        <p style={{ margin: '5 0' }}>{`${payload[0].value} min`}</p>
      </div>
    );
  }

  return null;
};

export const AverageSessions = ({ userAverageSessions }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {  
    setIsLoading(userAverageSessions === undefined);  
  }, [userAverageSessions]);

  return (isLoading ? <Loading /> :
    <ResponsiveContainer height='100%' width='100%'>
      <LineChart width={730} height={250} data={userAverageSessions} style={{ backgroundColor: '#E60000', borderRadius: '5px' }}
          margin={{ top: 15, right: 15, left: 15, bottom: 15 }}>
        <XAxis dataKey="day" strokeOpacity={0} tick={{ fill: 'white', opacity: 0.5, fontSize: '12px' }} />
        <YAxis hide={true} tick={7} />
        <Tooltip content={<CustomTooltip />} wrapperStyle={{ outline: "none" }} />
        {/* <Legend /> */}
        <Line type="monotone" dataKey="sessionLength" stroke="white" />
        <text
          x='12%'
          y='12%'
          dy={+12}
          style={{ fontSize: '15px', fontWeight: 500, fill: '#FFFFFF', fillOpacity: 0.5 }}
          width={50}
          textAnchor='start'
          verticalanchor='start'
        >Durée moyenne des sessions
        </text>
      </LineChart>
    </ResponsiveContainer>
  )
};

AverageSessions.propTypes = {
  userAverageSessions: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string,
      sessionLength: PropTypes.number
    })
  )
};