import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Missions from '../components/Missions/Missions';
import missionsSlice from '../redux/missions/missionSlice';

const store = configureStore({
  reducer: {
    missions: missionsSlice,
  },
});

test('renders Missions component correctly', async () => {
  render(
    <Provider store={store}>
      <Missions />
    </Provider>,
  );

  // Wait for the table with missions to be rendered
  await waitFor(() => {
    const tableElement = screen.getByRole('table');
    expect(tableElement).toBeInTheDocument();
  });

  // Check if there's only one <th> element with the text "Mission"
  const thElements = screen.getAllByRole('columnheader');
  const missionHeaderElement = thElements.find((th) => th.textContent === 'Mission');
  expect(missionHeaderElement).toBeInTheDocument();
  expect(thElements).toHaveLength(4);

  // Check if there exists a <tr> element with the className "p-8"
  const trElement = screen.getByRole('row', { name: /Mission 1 description/i });
  expect(trElement).toHaveClass('p-8');
});
