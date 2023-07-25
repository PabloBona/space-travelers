import React from 'react';
import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import { AllMissions } from '../redux/missions/missionSlice';
import '../style/myProfile.css';

const MyProfile = () => {
  const missions = useSelector(AllMissions);

  const reservedMissions = missions.filter((mission) => mission.reserved);

  return (
    <section className="my-missions">
      <h2>My Missions</h2>
      <Table striped bordered hover>
        <tbody>
          {reservedMissions.map(({ id, name }) => (
            <tr key={id} className="p-8">
              <td className="fw-bold">{name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </section>
  );
};

export default MyProfile;
