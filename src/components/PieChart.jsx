import { 
    Pie, 
    PieChart, 
    ResponsiveContainer, 
} from "recharts"; 
import { useContext } from "react";
import { UserContext } from "./UserContext";

export const Chart = () => {
    const { userInfos } = useContext(UserContext);
    const { score, todayScore } = userInfos;
    let number = todayScore ? todayScore : score;

    return (
        <ResponsiveContainer height='100%' width='100%'>
            <PieChart width={100} height={100} style={{ borderRadius: '5px' }}>
                <Pie 
                data={[userInfos]} 
                dataKey={todayScore ? 'todayScore' : 'score'} 
                nameKey="name" 
                cx="50%" 
                cy="50%" 
                startAngle={90 + 360 * number}
                endAngle={90}
                innerRadius={40} 
                outerRadius={50} 
                fill="#E60000" />            
            </PieChart>
        </ResponsiveContainer>
    )
}