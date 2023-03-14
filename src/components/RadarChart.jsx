import { 
    Radar, 
    RadarChart, 
    PolarGrid, 
    Legend, 
    ResponsiveContainer, 
    PolarAngleAxis, 
    PolarRadiusAxis, 
} from "recharts"; 

const data = [
    {
        property: 'Intensité',
        value: 5,
    },
    {
        property: 'Vitesse',
        value: 16,
    },
    {
        property: 'Force',
        value: 9,
    },
    {
        property: 'Endurance',
        value: 15,
    },
    {
        property: 'Energie',
        value: 15,
    },
    {
        property: 'Cardio',
        value: 7,
    },
];

export const Chart = () => {
    return (
        <ResponsiveContainer height='100%' width='100%'>
            <RadarChart 
                outerRadius={90} 
                width={730} 
                height={250} 
                data={data} 
                style={{ backgroundColor: '#282D30', borderRadius: '5px'  }}
                margin={{ top: 15, right: 15, left: 15, bottom: 15 }}>
                <PolarGrid />
                <PolarAngleAxis dataKey="property" />
                {/* <PolarRadiusAxis angle={30} domain={[0, 20]} /> */}
                <Radar name="Mike" dataKey="value" stroke="#E60000" fill="#E60000" fillOpacity={0.6} />
                {/* <Legend /> */}
            </RadarChart>
        </ResponsiveContainer>
    )
}