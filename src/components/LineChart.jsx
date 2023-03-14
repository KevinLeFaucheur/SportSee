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

const data = [
    {
        day: 1,
        session: 55,
    },
    {
        day: 2,
        session: 35,
    },
    {
        day: 3,
        session: 5,
    },
    {
        day: 4,
        session: 78,
    },
];

export const Chart = () => {
    return (
        <ResponsiveContainer height='100%' width='100%'>
            <LineChart width={730} height={250} data={data}  style={{ backgroundColor: '#E60000', borderRadius: '5px' }}
                    margin={{ top: 15, right: 15, left: 15, bottom: 15 }}>
                <XAxis dataKey="session" />
                <YAxis hide={true} tick={7} />
                <Tooltip />
                {/* <Legend /> */}
                <Line type="monotone" dataKey="session" stroke="white" />
            </LineChart>
        </ResponsiveContainer>
    )
}