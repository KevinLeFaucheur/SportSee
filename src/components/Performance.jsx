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

export const Performance = ({ userPerformance }) => {
     const [isLoading, setIsLoading] = useState(true);
   
     useEffect(() => {  
       setIsLoading(userPerformance === undefined);
     }, [userPerformance]);

    return (isLoading ? <Loading /> :
        <ResponsiveContainer height='100%' width='100%'>
            <RadarChart 
                outerRadius={70} 
                width={500} 
                height={500} 
                data={userPerformance} 
                style={{ backgroundColor: '#282D30', borderRadius: '5px' }}
                margin={{ top: 15, right: 15, left: 15, bottom: 15 }}>
                    <PolarGrid radialLines={false} color='white' />
                    <PolarAngleAxis 
                        dataKey='kind' 
                        tick={{ fill: 'white' }}
                        fontSize={12} 
                        fontWeight={500}
                        fontFamily='Roboto'
                    />
                    {/* <PolarRadiusAxis angle={90} /> */}
                    <Radar dataKey="value" stroke="#E60000" fill="#E60000" fillOpacity={0.8} />
                    {/* <Legend /> */}
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