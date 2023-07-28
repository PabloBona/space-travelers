import React from 'react';
import { useSelector } from 'react-redux';
import { AllMissions } from '../redux/missions/missionSlice';
import '../style/myProfile.css';

const MyProfile = () => {
  const missions = useSelector(AllMissions);
  const dragonsData = useSelector((state) => state.dragons.dragons);
  const rocketsData = useSelector((state) => state.rockets.rockets);
  const reservedMissions = missions.filter((mission) => mission.reserved);
  const reservedDragons = dragonsData.filter((dragon) => dragon.reserved);
  const reservedRockets = rocketsData.filter((rocket) => rocket.isReserved);

  return (
    <section className="container">
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12">
          <h2 className="my-3 text-primary">My Rockets</h2>
          <ul className="list-group custom-list">
            {reservedRockets.map((rocket) => (
              <li className="list-group-item" key={rocket.id}>{rocket.rocketName}</li>
            ))}
          </ul>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <h2 className="my-3 text-primary">My Missions</h2>
          <ul className="list-group custom-list">
            {reservedMissions.map(({ id, name }) => (
              <li className="list-group-item" key={id}>{name}</li>
            ))}
          </ul>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <h2 className="my-3 text-primary">My Dragons</h2>
          <ul className="list-group custom-list">
            {reservedDragons.map((dragon) => (
              <li className="list-group-item" key={dragon.id}>{dragon.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MyProfile;
