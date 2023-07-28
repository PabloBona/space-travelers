import React, { useEffect } from 'react';
import '../style/rockets.css';
import { useSelector, useDispatch } from 'react-redux';
import { getRocketData, reserveRocket } from '../redux/rockets/rocketsSlice';

function Rockets() {
  const { rockets, isLoading, error } = useSelector((store) => store.rockets);
  const dispatch = useDispatch();

  const handleButtonClick = (rocketId) => {
    dispatch(reserveRocket(rocketId));
  };

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
      <div className="">

        <ul className="list-unstyled">
          {rockets.map((rocket) => (
            <li className="row " key={rocket.id}>
              <div className="col">
                <img className="rocket-img" src={rocket.imageRocket} alt="rocket_image" key={rocket.id} />
              </div>
              <div className="col">
                <h3 className="rocket-name">{rocket.rocketName}</h3>
                <div>
                  {rocket.isReserved && <samp>Reserved </samp>}
                  <p className="rocket-description">{rocket.description}</p>
                </div>
                <div className="col">
                  {rocket.isReserved ? (
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => handleButtonClick(rocket.id)}
                    >
                      Cancel Reservation
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="booking-btn"
                      onClick={() => handleButtonClick(rocket.id)}
                    >
                      BOOK ROCKET
                    </button>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>

  );
}

export default Rockets;
