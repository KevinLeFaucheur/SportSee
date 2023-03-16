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

export const Chart = ({ averageSessionsData }) => {
    const { sessions } = averageSessionsData;

    return (
        <ResponsiveContainer height='100%' width='100%'>
            <LineChart width={730} height={250} data={sessions}  style={{ backgroundColor: '#E60000', borderRadius: '5px' }}
                    margin={{ top: 15, right: 15, left: 15, bottom: 15 }}>
                <XAxis dataKey="day" />
                <YAxis hide={true} tick={7} />
                <Tooltip />
                {/* <Legend /> */}
                <Line type="monotone" dataKey="sessionLength" stroke="white" />
            </LineChart>
        </ResponsiveContainer>
    )
}