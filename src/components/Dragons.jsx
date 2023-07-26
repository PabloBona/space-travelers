import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDragonsData } from '../redux/dragons/dragonsSlice';
import '../style/dragons.css';
import DragonCard from './DragonCard';

const Dragons = () => {
  const dispatch = useDispatch();
  const dragonsData = useSelector((state) => state.dragons.dragons);
  const isLoading = useSelector((state) => state.dragons.isLoading);
  const error = useSelector((state) => state.dragons.error);

  useEffect(() => {
    if (!dragonsData.length) {
      dispatch(fetchDragonsData());
    }
  });

  if (isLoading) {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 className="align-items-center d-flex justify-content-center text-light vh-100">Loading...</h2>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="align-items-center d-flex justify-content-center text-danger vh-100 fs-2">
              {error}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="my-3">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center text-danger">SpaceX Dragons</h1>
            {dragonsData.map((dragon) => (
              <DragonCard key={dragon.id} dragon={dragon} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dragons;
