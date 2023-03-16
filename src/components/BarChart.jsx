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

export const Chart = ({ activityData }) => {
  const { sessions, userId } = activityData;

  // reformat to [1, 2, 3, 4, 5, 6, 7]

  return (
    <ResponsiveContainer height='100%' width='100%'>
      <BarChart
        width={700}
        height={300}
        data={sessions}
        margin={{
          top: 0,
          right: 0,
          left: 50,
          bottom: 0,
        }}>
        <CartesianGrid strokeDasharray="1 3" />
        <XAxis dataKey='day' ></XAxis>
        <YAxis tickCount={3} orientation='right' axisLine={false} />
        <Tooltip />
        <Legend verticalAlign="top" align="right" iconType="circle" iconSize={8} height={100} />
        <Bar dataKey='kilogram' name="Poids (kg)" barSize={7} fill="#282D30" />
        <Bar dataKey='calories' name="Calories brûlées (kCal)" barSize={7} fill="#E60000" />
      </BarChart>
    </ResponsiveContainer>
  )
};