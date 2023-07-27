import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import Mission from '../../components/Missions/Mission';
import store from '../../redux/store';

const testMission = {
  id: '1',
  name: 'Test Mission',
  description: 'This is a test mission.',
  reserved: false,
};

const reservedTestMission = {
  id: '2',
  name: 'Reserved Mission',
  description: 'This is a reserved mission.',
  reserved: true,
};

describe('Mission', () => {
  test('Renders mission details correctly', () => {
    render(
      <Provider store={store}>
        <table>
          <tbody>
            <tr>
              <Mission mission={testMission} />
            </tr>
          </tbody>
        </table>
      </Provider>,
    );

    const missionName = screen.getByText(testMission.name);
    expect(missionName).toBeInTheDocument();

    const missionDescription = screen.getByText(testMission.description);
    expect(missionDescription).toBeInTheDocument();

    const joinButton = screen.getByText('Join Mission');
    expect(joinButton).toBeInTheDocument();
  });

  test('Clicking join button dispatches reserveMission action', () => {
    render(
      <Provider store={store}>
        <table>
          <tbody>
            <tr>
              <Mission mission={testMission} />
            </tr>
          </tbody>
        </table>
      </Provider>,
    );

    const joinButton = screen.getByText('Join Mission');
    fireEvent.click(joinButton);
  });

  test('Renders reserved mission details correctly', () => {
    render(
      <Provider store={store}>
        <table>
          <tbody>
            <tr>
              <Mission mission={reservedTestMission} />
            </tr>
          </tbody>
        </table>
      </Provider>,
    );

    const missionName = screen.getByText(reservedTestMission.name);
    expect(missionName).toBeInTheDocument();

    const missionDescription = screen.getByText(reservedTestMission.description);
    expect(missionDescription).toBeInTheDocument();

    const activeMemberBadge = screen.getByText('Active Member');
    expect(activeMemberBadge).toBeInTheDocument();

    const leaveButton = screen.getByText('Leave Mission');
    expect(leaveButton).toBeInTheDocument();

    const joinButton = screen.queryByText('Join Mission');
    expect(joinButton).not.toBeInTheDocument();
  });
});
