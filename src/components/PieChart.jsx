import { useEffect, useState } from "react";
import { 
    Pie, 
    PieChart, 
    ResponsiveContainer, 
} from "recharts"; 
import PropTypes from 'prop-types';
import { Loading } from "./Loading";

export const Chart = ({ userData }) => {
    const { score, todayScore } = userData;
    let number = todayScore ? todayScore : score;

    const chartData = [
        { name: 'score', value: userData.todayScore },
        { name: 'max', value: 1 }
     ];

     const [isLoading, setIsLoading] = useState(true);
   
     useEffect(() => {  
       setIsLoading(userData === undefined ? true : false);
     }, [userData]);

    return (isLoading ? <Loading /> :
        <ResponsiveContainer height='100%' width='100%'>
            <PieChart width={100} height={100} style={{ borderRadius: '5px' }}>
                <Pie 
                data={[userData]} 
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
};


Chart.propTypes = {
    userData: PropTypes.shape({
        id: PropTypes.number,
        keyData: PropTypes.shape({
            calorieCount: PropTypes.number,
            carbohydrateCount: PropTypes.number,
            lipidCount: PropTypes.number,
            proteinCount: PropTypes.number,
        }),
        todayScore: PropTypes.number,
        userInfos:PropTypes.shape({
            age: PropTypes.number,
            firstName: PropTypes.string,
            lastName: PropTypes.string,
        })
    })
};