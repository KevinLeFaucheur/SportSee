import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserPerformance } from "../services";
import { 
    Radar, 
    RadarChart, 
    PolarGrid, 
    Legend, 
    ResponsiveContainer, 
    PolarAngleAxis, 
    PolarRadiusAxis, 
} from "recharts"; 

export const Chart = () => {
    const [userPerformance, setUserPerformance] = useState([]);
    const { id } = useParams();

    useEffect(() => {  

      const getUserPerformanceData = async () => {
        const { data } = await getUserPerformance(id);
        setUserPerformance(data);
      }  

      getUserPerformanceData();
    }, [id]);

    return (userPerformance.data &&
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
}