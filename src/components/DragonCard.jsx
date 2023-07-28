import React from 'react';
import PropTypes from 'prop-types';
import '../style/dragons.css';
import { useDispatch } from 'react-redux';
import { reserveDragon } from '../redux/dragons/dragonsSlice';

const DragonCard = ({ dragon }) => {
  const dispatch = useDispatch();

  const handleReserve = () => {
    dispatch(reserveDragon(dragon.id));
  };
  return (
    <div className="dragon-card rounded my-3" key={dragon.id}>
      <div className="row">
        <div className="col-md-5 col-sm-12 d-flex justify-content-around">
          {dragon.flickr_images && dragon.flickr_images.length > 0 ? (
            <img className="w-100" src={dragon.flickr_images[0]} alt={dragon.name} />
          ) : (
            <div>No image available</div>
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
            {!dragon.reserved ? (
              <button onClick={handleReserve} type="submit" className="btn btn-primary">Reserve Dragon</button>
            ) : (
              <button onClick={handleReserve} type="submit" className="btn btn-danger">Cancel Dragon</button>
            ) }
          </div>
        </div>
      </div>
    </div>
  );
};

DragonCard.propTypes = {
  dragon: PropTypes.shape({
    id: PropTypes.string.isRequired,
    flickr_images: PropTypes.arrayOf(PropTypes.string).isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    reserved: PropTypes.bool,
  }).isRequired,
};

export default DragonCard;
