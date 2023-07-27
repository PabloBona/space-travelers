import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import '@testing-library/jest-dom/extend-expect';
import Rockets from '../components/Rockets';

// Mock the redux store
const mockStore = configureMockStore();

describe('Rockets Component', () => {
  test('renders rocket names', () => {
    const initialState = {
      rockets: {
        rockets: [
          {
            id: 1,
            rocketName: 'Falcon 1',
            imageRocket: 'rocket1.jpg',
            description: 'This is Falcon 1',
            isReserved: false,
          },
          // Add more sample rockets as needed
        ],
        isLoading: false,
        error: null,
      },
    };
    const store = mockStore(initialState);

    const { getByText } = render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    // Test if the component renders the names of rockets
    expect(getByText('Falcon 1')).toBeInTheDocument();
    // Add more rocket names as needed based on your implementation
  });

  test('clicking on "BOOK ROCKET" button reserves the rocket', () => {
    const initialState = {
      rockets: {
        rockets: [
          {
            id: 1,
            rocketName: 'Falcon 1',
            imageRocket: 'rocket1.jpg',
            description: 'This is Falcon 1',
            isReserved: false,
          },
          // Add more sample rockets as needed
        ],
        isLoading: false,
        error: null,
      },
    };
    const store = mockStore(initialState);

    const { getByText } = render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    // Find and click the "BOOK ROCKET" button
    fireEvent.click(getByText('BOOK ROCKET'));

    // Get actions dispatched to the store
    const actions = store.getActions();

    // Check if the reserveRocket action was dispatched with the correct payload (rocket ID)
    expect(actions).toEqual([
      {
        type: 'rockets/reserveRocket',
        payload: 1, // Assuming you pass the rocket ID to the payload
      },
    ]);
  });

  // Add more test cases for different scenarios as needed
});
