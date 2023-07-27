import React from 'react';
import { useSelector } from 'react-redux';
import { AllMissions } from '../redux/missions/missionSlice';
import '../style/myProfile.css';

const MyProfile = () => {
  const missions = useSelector(AllMissions);
  const dragonsData = useSelector((state) => state.dragons.dragons);

  const reservedMissions = missions.filter((mission) => mission.reserved);
  const reservedDragons = dragonsData.filter((dragon) => dragon.reserved);

  return (
    <section className="container">
      <div className="row">
        {/* From here  */}
        <div className="col-lg-4 col-md-4 col-sm-12">
          <h2 className="my-3 text-primary">My Rockets</h2>
          <ul className="list-unstyled">
            {reservedMissions.map(({ id, name }) => (
              <li className="border my-1 px-2 rounded" key={id}>
                {name}
              </li>
            ))}
          </ul>
        </div>
        {/* to here, we need to show Reserved Rockets (ALI) */}
        <div className="col-lg-4 col-md-4 col-sm-12">
          <h2 className="my-3 text-primary">My Missions</h2>
          <ul className="list-unstyled">
            {reservedMissions.map(({ id, name }) => (
              <li className="border my-1 px-2 rounded" key={id}>
                {name}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <h2 className="my-3 text-primary">My Dragons</h2>
          <ul className="list-unstyled">
            {reservedDragons.map((dragon) => (
              <li className="border my-1 px-2 rounded" key={dragon.id}>
                {dragon.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MyProfile;
