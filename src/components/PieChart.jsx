import { 
    Pie, 
    PieChart, 
    ResponsiveContainer, 
} from "recharts"; 

const data = [
    {
        score: 12
    }
];

export const Chart = () => {
    return (
        <ResponsiveContainer height='100%' width='100%'>
            <PieChart width={100} height={100} style={{ borderRadius: '5px' }}>
                <Pie 
                data={data} 
                dataKey="score" 
                nameKey="name" 
                cx="50%" 
                cy="50%" 
                startAngle={90 + 360 * 12 / 100}
                endAngle={90}
                innerRadius={40} 
                outerRadius={50} 
                fill="#E60000" />            
            </PieChart>
        </ResponsiveContainer>
    )
}