import React from 'react';
import PropTypes from 'prop-types';
import '../style/dragons.css';

const DragonCard = ({ dragon }) => (
  <div className="dragon-card rounded my-3" key={dragon.id}>
    <div className="row">
      <div className="col-sm-12 col-md-5">
        {dragon.name === 'Dragon 1' ? (
          <img className="w-100" src={dragon.flickr_images[0]} alt={dragon.name} />
        ) : (
          <img className="w-100" src={dragon.flickr_images[0]} alt={dragon.name} />
        )}
      </div>
      <div className="col-sm-12 col-md-7">
        <div className="py-3">
          <h2 className="">
            {dragon.name}
          </h2>
        </div>
        <div className="">{dragon.description}</div>
        <div className="py-3">
          <button type="submit" className="btn btn-primary">Reserve Dragon</button>
        </div>
      </div>
    </div>
  </div>
);

DragonCard.propTypes = {
  dragon: PropTypes.shape({
    id: PropTypes.string.isRequired,
    flickr_images: PropTypes.arrayOf(PropTypes.string).isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default DragonCard;
