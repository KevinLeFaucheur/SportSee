import { Customized, Line, LineChart, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"; 
import { useEffect, useState } from "react";
import { Loading } from "./Loading";
import PropTypes from 'prop-types';
import { ErrorMessage } from "./ErrorMessage";

/** This renders the custom tooltip */
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    // console.log(payload);
    return (
      <div style={{ backgroundColor: 'white', fontSize: '7px', padding: '10px', width: 'max-content' }}>
        <p style={{ margin: '5 0' }}>{`${payload[0].value} min`}</p>
      </div>
    );
  }

  return null;
};

/** This renders the darker area and calculates its dynamic width */
const CustomizedRectangle = (props) => {
  // console.log(props);

  return (
    <Rectangle
      width={props?.width - props.activeCoordinate?.x}
      height={props?.height}
      x={props.activeCoordinate?.x}
      y={0}
      fill='black' 
      fillOpacity={0.1} 
      ifOverflow='visible'
    />
  )
};

export const AverageSessions = ({ userAverageSessions }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasNetworkError, setHasNetworkError] = useState(false);

  useEffect(() => {  
    setIsLoading(userAverageSessions === undefined);
    setHasNetworkError(userAverageSessions instanceof Error);
  }, [userAverageSessions]);

  return (isLoading ? <Loading /> :
          hasNetworkError ? <ErrorMessage error={userAverageSessions} /> :
    <ResponsiveContainer height='100%' width='100%'>  
      <LineChart 
        data={userAverageSessions}
        width={730} height={250} 
        style={{ backgroundColor: '#E60000', borderRadius: '5px' }}
        margin={{ top: 15, right: 0, left: 0, bottom: 15 }}
      >
        <XAxis dataKey="day" strokeOpacity={0} tick={{ fill: 'white', opacity: 0.5, fontSize: '12px' }} domain={[1, 7]} />
        <YAxis hide={true} tick={7} domain={[0, 130]} />
        <Tooltip content={<CustomTooltip />} wrapperStyle={{ outline: "none" }} cursor={false} />
        <Line 
          dataKey="sessionLength" type="monotone" 
          stroke="url(#colorUv)" dot={false} fill="url(#colorUv)"
        />
        <defs>
          {/* Fade in from the left for the Line component */}
          <linearGradient id="colorUv" x1="0" y1="0" x2="0.5" y2="0">
            <stop offset="5%" stopColor="white" stopOpacity={0.2}/>
            <stop offset="95%" stopColor="white" stopOpacity={1}/>
          </linearGradient>
        </defs>
        <text
          x='10%' y='12%' dy={+12} width={50}
          textAnchor='start' verticalanchor='start'
          style={{ fontSize: '15px', fontWeight: 500, fill: 'white', fillOpacity: 0.5, height: "100px" }}
        >Durée moyenne des sessions
        </text>
        <Customized component={CustomizedRectangle}/>
      </LineChart>
    </ResponsiveContainer>
  )
};

AverageSessions.propTypes = {
  userAverageSessions: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        day: PropTypes.string,
        sessionLength: PropTypes.number
      })
  ),
    PropTypes.instanceOf(Error)
  ])
};