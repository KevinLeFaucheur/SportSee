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
        console.table(data);
      }  

      getUserPerformanceData();
    }, [id]);

    return (
        <ResponsiveContainer height='100%' width='100%'>
            <RadarChart 
                outerRadius={90} 
                width={730} 
                height={250} 
                data={userPerformance.data} 
                style={{ backgroundColor: '#282D30', borderRadius: '5px'  }}
                margin={{ top: 15, right: 15, left: 15, bottom: 15 }}>
                <PolarGrid strokeDasharray="3 1 1" radialLines={false}/>
                <PolarAngleAxis dataKey='kind' tickFormatter={tick => userPerformance.kind[tick]} />
                {/* <PolarRadiusAxis angle={90} /> */}
                <Radar name="" dataKey="value" stroke="#E60000" fill="#E60000" fillOpacity={0.6} />
                {/* <Legend /> */}
            </RadarChart>
        </ResponsiveContainer>
    )
}