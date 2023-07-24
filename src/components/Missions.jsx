import React, { useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { AllMissions, fetchMissions } from '../redux/missions/missionSlice';
import '../style/missions.css';

export const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector(AllMissions);

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  return (
    <Table striped bordered hover className="missions-table">
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th>Join/Leave</th>
        </tr>
      </thead>
      <tbody>
        {missions.map(({ mission_id, mission_name, description }) => (
          <tr key={mission_id}>
            <td>{mission_name}</td>
            <td className="description">{description}</td>
            <td>Not a Member / Active Member</td>
            <td>
              <Button variant="outline-success" type="button">Join</Button>
              <Button variant="outline-danger" type="button">Leave</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Missions;
