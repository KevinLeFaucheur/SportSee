import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { 
    Radar, 
    RadarChart, 
    PolarGrid, 
    Legend, 
    ResponsiveContainer, 
    PolarAngleAxis, 
    PolarRadiusAxis, 
} from "recharts"; 
import { Loading } from "./Loading";

export const Chart = ({ userPerformance }) => {
     const [isLoading, setIsLoading] = useState(true);
   
     useEffect(() => {  
       setIsLoading(userPerformance === undefined ? true : false);
     }, [userPerformance]);

    return (isLoading ? <Loading /> :
        <ResponsiveContainer height='100%' width='100%'>
            <RadarChart 
                outerRadius={50} 
                width={500} 
                height={500} 
                data={userPerformance.data} 
                style={{ backgroundColor: '#282D30', borderRadius: '5px' }}
                margin={{ top: 15, right: 15, left: 15, bottom: 15 }}>
                    <PolarGrid strokeDasharray="3 1" radialLines={false}/>
                    <PolarAngleAxis dataKey='kind' tickFormatter={tick => userPerformance.kind[tick]} />
                    {/* <PolarRadiusAxis angle={90} /> */}
                    <Radar dataKey="value" stroke="#E60000" fill="#E60000" fillOpacity={0.6} />
                    {/* <Legend /> */}
            </RadarChart>
        </ResponsiveContainer>
    )
};

Chart.propTypes = {
    userPerformance: PropTypes.shape({
        data: PropTypes.arrayOf(
            PropTypes.shape({
                value: PropTypes.number,
                kind: PropTypes.number,
            })
        ),
        kind: PropTypes.objectOf(PropTypes.string),
        userId: PropTypes.number
    })
};