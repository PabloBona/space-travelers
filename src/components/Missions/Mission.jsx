import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Badge } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { reserveMission } from '../../redux/missions/missionSlice';

const Mission = ({ mission }) => {
  const {
    id,
    name,
    description,
    reserved,
  } = mission;
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    dispatch(reserveMission(id));
  };

  return (
    <>
      <td className="fw-bold">{name}</td>
      <td>{description}</td>
      <td className="vertical-align">
        {reserved ? (
          <Badge bg="success">Active Member</Badge>
        ) : (
          <Badge bg="secondary">Not A Member</Badge>
        )}
      </td>
      <td className="vertical-align">
        {reserved ? (
          <Button variant="outline-danger" type="button" onClick={handleButtonClick}>
            Leave Mission
          </Button>
        ) : (
          <Button variant="outline-success" type="button" onClick={handleButtonClick}>
            Join Mission
          </Button>
        )}
      </td>
    </>
  );
};

Mission.propTypes = {
  mission: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    reserved: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Mission;
