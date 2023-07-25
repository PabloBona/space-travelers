import React from 'react';

const Mission = ({ mission }) => {
  const { id, name, description, reserved } = mission;

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

export default Mission;
