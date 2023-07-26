import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket } from '../redux/rockets/rocketsSlice';

function Rocket({ rocket }) {
  const dispatch = useDispatch();

  const handleButtonClick = (rocketId) => {
    dispatch(reserveRocket(rocketId));
  };

  return (
    <li key={rocket.id} className="rocket-item">
      <div className="rocket-image-container">
        <img src={rocket.imageRocket} alt="rocket_image" className="rocket-image" key={rocket.id} />
      </div>
      <div className="rocket-description-container">
        <h3 className="rocket-name">{rocket.rocketName}</h3>
        <div>
          {rocket.isReserved && <samp>Reserved </samp>}
          <p className="rocket-description">{rocket.description}</p>
        </div>
        {rocket.isReserved ? (
          <button
            type="button"
            className="cancel-btn"
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
    </li>
  );
}

Rocket.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.string.isRequired,
    imageRocket: PropTypes.string.isRequired,
    rocketName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    isReserved: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Rocket;
