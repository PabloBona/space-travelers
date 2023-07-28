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
      <h1 className="rockets-title d-flex justify-content-center text-danger my-3">Rockets</h1>
      <div>
        {rockets.map((rocket) => (
          <div className="row mb-3" key={rocket.id}>
            <div className="col-md-4 col-sm-12 mb-3">
              <img className="" src={rocket.imageRocket} alt="rocket_image" key={rocket.id} />
            </div>
            <div className="col-md-8 col-sm-12">
              <div className="d-flex ">
                <h3 className="rocket-name">{rocket.rocketName}</h3>
                {rocket.isReserved && <samp className=" text-success mx-3 fw-bold fs-5">Reserved </samp>}

              </div>
              <p className="rocket-description">{rocket.description}</p>
              <div>
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
                    className="btn btn-primary"
                    onClick={() => handleButtonClick(rocket.id)}
                  >
                    BOOK ROCKET
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rockets;
