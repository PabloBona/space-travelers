import React, { useEffect } from 'react';
import '../style/rockets.css';
import { useSelector, useDispatch } from 'react-redux';
import { getRocketData } from '../redux/rockets/rocketsSlice';
import Rocket from './RocketCard';

function Rockets() {
  const { rockets, isLoading, error } = useSelector((store) => store.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRocketData());
  }, [dispatch]);

  if (isLoading) {
    return <div className="alert-box">Loading data from API...</div>;
  }

  if (error) {
    return <div className="alert-box">{error}</div>;
  }

  return (
    <div className="container">
      <ul>
        {rockets.map((rocket) => (
          <Rocket key={rocket.id} rocket={rocket} />
        ))}
      </ul>
    </div>
  );
}

export default Rockets;
