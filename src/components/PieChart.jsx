import { useEffect, useState } from "react";
import { 
    Pie, 
    PieChart, 
    ResponsiveContainer, 
} from "recharts"; 
import PropTypes from 'prop-types';
import { Loading } from "./Loading";

export const Chart = ({ userData }) => {
    const [score, setScore] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
   
    useEffect(() => {  
        if(userData) {
            setScore(userData.score);
        }
        setIsLoading(userData === undefined);
    }, [userData]);

    return (isLoading ? <Loading /> :
        <ResponsiveContainer height='100%' width='100%'>
            <PieChart width={100} height={100} style={{ borderRadius: '5px' }}>
                <Pie 
                data={[userData]} 
                dataKey="score"
                nameKey="name" 
                cx="50%" 
                cy="50%" 
                startAngle={90 + 360 * score}
                endAngle={90}
                innerRadius={80} 
                outerRadius={90}  
                cornerRadius={5}
                fill="#E60000" />
                <text x='50%' y='43%' textAnchor="middle" dominantBaseline="middle" fontFamily="Roboto" fontWeight={700} fontSize={26}>{score * 100}%</text>
                <text x='50%' y='53%' textAnchor="middle" dominantBaseline="middle" fontFamily="Roboto" fontSize={16}>de votre</text>
                <text x='50%' y='60%' textAnchor="middle" dominantBaseline="middle" fontFamily="Roboto" fontSize={16}>objectif</text>
                <text x='12%' y='12%' dy={+12} style={{ fontSize: '15px', fontWeight: 500, fill: '#000000' }} width={50} 
                    textAnchor='start'
                    verticalanchor='start'
                    >Score
                </text>
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