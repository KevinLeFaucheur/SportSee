import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { 
    Pie, 
    PieChart, 
    ResponsiveContainer, 
} from "recharts"; 
import { getUser } from "../services";

export const Chart = () => {
    const [userInfos, setUserInfos] = useState([]);
    const { score, todayScore } = userInfos;
    let number = todayScore ? todayScore : score;
    const { id } = useParams();
    // let number = userInfos?.todayScore ? userInfos?.todayScore : userInfos?.score;
    // userInfos.todayScore ? userInfos.todayScore : userInfos.score

    const chartData = [
        { name: 'score', value: userInfos.todayScore },
        { name: 'max', value: 1 }
     ];

    useEffect(() => {  
      const getUserData = async () => {
        const { data } = await getUser(id);
        setUserInfos(data);
      }  
  
      getUserData();
    }, [id]);

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
                innerRadius={80} 
                outerRadius={90}  
                cornerRadius={5}
                fill="#E60000" />
                <text x='50%' y='43%' textAnchor="middle" dominantBaseline="middle" fontFamily="Roboto" fontWeight={700} fontSize={26}>{todayScore}%</text>
                <text x='50%' y='53%' textAnchor="middle" dominantBaseline="middle" fontFamily="Roboto" fontSize={16}>de votre</text>
                <text x='50%' y='60%' textAnchor="middle" dominantBaseline="middle" fontFamily="Roboto" fontSize={16}>objectif</text>
            </PieChart>
        </ResponsiveContainer>
    )
}