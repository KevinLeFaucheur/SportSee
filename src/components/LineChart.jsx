import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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

export const Chart = ({ userAverageSessions }) => {
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {  
      setIsLoading(userAverageSessions === undefined);  
    }, [userAverageSessions]);

    return (isLoading ? <Loading /> :
        <ResponsiveContainer height='100%' width='100%'>
            <LineChart width={730} height={250} data={userAverageSessions.sessions}  style={{ backgroundColor: '#E60000', borderRadius: '5px' }}
                    margin={{ top: 15, right: 15, left: 15, bottom: 15 }}>
                <XAxis dataKey="day" />
                <YAxis hide={true} tick={7} />
                <Tooltip />
                {/* <Legend /> */}
                <Line type="monotone" dataKey="sessionLength" stroke="white" />
            </LineChart>
        </ResponsiveContainer>
    )
};

Chart.propTypes = {
    userAverageSessions: PropTypes.shape({
        sessions: PropTypes.arrayOf(
          PropTypes.shape({
            day: PropTypes.number,
            sessionLength: PropTypes.number,
        })),
        userId: PropTypes.number
    })
};