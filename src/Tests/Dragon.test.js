import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils';
import Missions from '../components/Missions/Missions';
import missionsSlice from '../redux/missions/missionSlice';

const store = configureStore({
  reducer: {
    missions: missionsSlice,
  },
});

describe('Missions', () => {
  test('Component renders correctly in DragonTest', () => {
    const tree = renderer.create(
      <Provider store={store}><Missions /></Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Component has spinner and no error in DragonTest', () => {
    act(() => {
      render(
        <Provider store={store}>
          <Missions />
        </Provider>,
      );
    });

    const spinner = screen.getByRole('status');
    expect(spinner).toBeInTheDocument();

    const errorAlert = screen.queryByRole('alert');
    expect(errorAlert).not.toBeInTheDocument();
  });
});
