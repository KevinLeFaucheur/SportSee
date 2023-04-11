import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { Customized, Dot, Pie, PieChart, ResponsiveContainer } from "recharts"; 
import { Loading } from "./Loading";

const CustomizedDot = (props) => {
  // console.log(props);

  return (
    <Dot
      cx={props.width / 2}
			cy={props.height / 2}
			r={80}
      fill='white' 
    />
  )
};

export const Score = ({ userScore }) => {
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {  
    if(userScore) {
      setScore(userScore[0].score);
    }
    setIsLoading(userScore === undefined);
  }, [userScore]);

  return (isLoading ? <Loading /> :
    <ResponsiveContainer height='100%' width='100%'>
      <PieChart width={100} height={100} style={{ borderRadius: '5px' }}>
        <Pie 
          data={userScore} dataKey="score" nameKey="name" 
          cx="50%" cy="50%" 
          startAngle={90} endAngle={90 + 360 * score}         // Pie starts from top, calculating counter-clockwise angle
          innerRadius={80} outerRadius={90} cornerRadius={5}
          fill="#E60000" 
				/>
				<Customized component={CustomizedDot}/>
        <text x='50%' y='43%' textAnchor="middle" dominantBaseline="middle" fontFamily="Roboto" fontWeight={700} fontSize={26}>{score * 100}%</text>
        <text x='50%' y='53%' textAnchor="middle" dominantBaseline="middle" fontFamily="Roboto" fontSize={16}>de votre</text>
        <text x='50%' y='60%' textAnchor="middle" dominantBaseline="middle" fontFamily="Roboto" fontSize={16}>objectif</text>
        <text x='1.5vw' y='1.5vw' dy={+12} style={{ fontSize: '15px', fontWeight: 500, fill: '#000000' }} width={50} 
          textAnchor='start'
          verticalanchor='start'
          >Score
        </text>
      </PieChart>
    </ResponsiveContainer>
  )
};

Score.propTypes = {
  userData: PropTypes.shape({
    score: PropTypes.number.isRequired
  })
};