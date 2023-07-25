import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Mission = ({ mission }) => {
  const {
    name,
    description,
  } = mission;

  return (
    <>
      <td>{name}</td>
      <td className="description">{description}</td>
      <td>Not a Member / Active Member</td>
      <td>
        <Button variant="outline-success" type="button">Join</Button>
        <Button variant="outline-danger" type="button">Leave</Button>
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
