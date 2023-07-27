import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Mission from '../components/Missions/Mission';
import missionsSlice from '../redux/missions/missionSlice';

const store = configureStore({
  reducer: {
    missions: missionsSlice,
  },
});

const missionData = {
  id: 'mission1',
  name: 'Mission 1',
  description: 'Mission 1 description',
  reserved: false,
};

test('renders Mission component correctly', () => {
  render(
    <Provider store={store}>
      <table>
        <tbody>
          <tr>
            <Mission mission={missionData} />
          </tr>
        </tbody>
      </table>
    </Provider>,
  );

  const nameElement = screen.getByText('Mission 1');
  const descriptionElement = screen.getByText('Mission 1 description');
  const statusElement = screen.getByText('Not A Member');
  const buttonElement = screen.getByText('Join Mission');

  expect(nameElement).toBeInTheDocument();
  expect(descriptionElement).toBeInTheDocument();
  expect(statusElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});
