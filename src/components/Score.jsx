import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { Customized, Dot, RadialBar, RadialBarChart, ResponsiveContainer } from "recharts"; 
import { Loading } from "./Loading";

const CustomizedDot = (props) => {
  // console.log(props);

  return (
    <Dot
      cx={props.width / 2}    // Calculates Dot center
			cy={props.height / 2}   // cx, cy : center
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
      <RadialBarChart 
        data={userScore} 
        width={100} height={100} 
        innerRadius={85} outerRadius={95} 
        startAngle={90} endAngle={90 + 360 * score}   
        fill="#E60000" 
      >
        <RadialBar minAngle={15} clockWise={true} dataKey='score' cornerRadius={5} />
				<Customized component={CustomizedDot}/>
        <text x='50%' y='38%' textAnchor="middle" fontSize={16} fontWeight={500} style={{ fill: 'black' }}>
          <tspan x="50%" dy="1.2rem" fontWeight={700} fontSize={26} >{score * 100}%</tspan>
          <tspan x="50%" dy="1.2rem">de votre</tspan>
          <tspan x="50%" dy="1.2rem">objectif</tspan>
          <tspan x='15%' y='12%' fontSize={15}>Score</tspan>
        </text>
      </RadialBarChart>
    </ResponsiveContainer>
  )
};

Score.propTypes = {
  userData: PropTypes.shape({
    score: PropTypes.number.isRequired
  })
};