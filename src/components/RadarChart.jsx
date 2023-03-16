import { 
    Radar, 
    RadarChart, 
    PolarGrid, 
    Legend, 
    ResponsiveContainer, 
    PolarAngleAxis, 
    PolarRadiusAxis, 
} from "recharts"; 

export const Chart = ({ performanceData }) => {
    const { data, kind } = performanceData;

    return (
        <ResponsiveContainer height='100%' width='100%'>
            <RadarChart 
                outerRadius={90} 
                width={730} 
                height={250} 
                data={data} 
                style={{ backgroundColor: '#282D30', borderRadius: '5px'  }}
                margin={{ top: 15, right: 15, left: 15, bottom: 15 }}>
                <PolarGrid strokeDasharray="3 1 1" radialLines={false}/>
                <PolarAngleAxis dataKey='kind' tickFormatter={tick => kind[tick]} />
                {/* <PolarRadiusAxis /> */}
                <Radar name="" dataKey="value" stroke="#E60000" fill="#E60000" fillOpacity={0.6} />
                {/* <Legend /> */}
            </RadarChart>
        </ResponsiveContainer>
    )
}