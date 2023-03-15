import { 
    Bar, 
    BarChart, 
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
        weight: 55,
        kCal: 14
    },
    {
        day: 2,
        weight: 55,
        kCal: 14
    },
    {
        day: 3,
        weight: 55,
        kCal: 14
    },
    {
        day: 4,
        weight: 55,
        kCal: 14
    },
];

export const Chart = () => {

  return (
    <ResponsiveContainer height='100%' width='100%'>
      <BarChart
        width={700}
        height={300}
        data={data}
        margin={{
          top: 0,
          right: 0,
          left: 50,
          bottom: 0,
        }}>
        <CartesianGrid strokeDasharray="1 3" />
        <XAxis dataKey="day" ></XAxis>
        <YAxis tickCount={3} orientation='right' axisLine={false} />
        <Tooltip />
        <Legend verticalAlign="top" align="right" iconType="circle" iconSize={8} height={100} />
        <Bar dataKey="weight" name="Poids (kg)" barSize={7} fill="#282D30" />
        <Bar dataKey="kCal" name="Calories brûlées (kCal)" barSize={7} fill="#E60000" />
      </BarChart>
    </ResponsiveContainer>
  )
};