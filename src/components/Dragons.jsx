import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchDragonsData from '../redux/dragons/fetchDragonsData';

const Dragons = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.dragons.isLoading);
  const error = useSelector((state) => state.dragons.error);

  useEffect(() => {
    dispatch(fetchDragonsData());
  }, [dispatch]);

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
    <div className="container">
      <div className="row">
        I render dragons here
      </div>
    </div>
  );
};

export default Dragons;
