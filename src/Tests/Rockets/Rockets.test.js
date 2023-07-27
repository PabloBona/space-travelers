import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Rockets from '../../components/Rockets';

const mockStore = configureMockStore();

jest.mock('../redux/rockets/rocketsSlice', () => ({
  getRocketData: jest.fn(),
  reserveRocket: jest.fn(),
}));

describe('Rockets component', () => {
  test('should render loading message when isLoading is true', () => {
    const store = mockStore({
      rockets: {
        rockets: [],
        isLoading: true,
        error: null,
      },
    });

    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    const loadingMessage = screen.getByText(/loading data from api/i);
    expect(loadingMessage).toBeInTheDocument();
  });

  test('should render error message when there is an error', () => {
    const errorMessage = 'An error occurred while fetching data.';
    const store = mockStore({
      rockets: {
        rockets: [],
        isLoading: false,
        error: errorMessage,
      },
    });

    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    const errorElement = screen.getByText(errorMessage);
    expect(errorElement).toBeInTheDocument();
  });

  test('should render rocket items when rockets data is available', () => {
    const rocketsData = [
      {
        id: 1,
        rocketName: 'Falcon 9',
        imageRocket: 'rocket_image_1.jpg',
        description: 'This is the Falcon 9 rocket.',
        isReserved: false,
      },
      {
        id: 2,
        rocketName: 'Saturn V',
        imageRocket: 'rocket_image_2.jpg',
        description: 'This is the Saturn V rocket.',
        isReserved: true,
      },
    ];

    const store = mockStore({
      rockets: {
        rockets: rocketsData,
        isLoading: false,
        error: null,
      },
    });

    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    const rocketItems = screen.getAllByRole('listitem');
    expect(rocketItems).toHaveLength(rocketsData.length);

    const bookingButtons = screen.getAllByText(/book rocket/i);
    const cancelButtons = screen.getAllByText(/cancel reservation/i);
    expect(bookingButtons).toHaveLength(1);
    expect(cancelButtons).toHaveLength(1);

    const reservedText = screen.getByText(/reserved/i);
    expect(reservedText).toBeInTheDocument();
  });

  test('should call reserveRocket action when booking button is clicked', () => {
    const rocketData = {
      id: 1,
      rocketName: 'Falcon 9',
      imageRocket: 'rocket_image_1.jpg',
      description: 'This is the Falcon 9 rocket.',
      isReserved: false,
    };

    const store = mockStore({
      rockets: {
        rockets: [rocketData],
        isLoading: false,
        error: null,
      },
    });

    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    const bookingButton = screen.getByText(/book rocket/i);
    fireEvent.click(bookingButton);

    expect(store.getActions()).toContainEqual({
      type: 'rockets/reserveRocket',
      payload: rocketData.id,
    });
  });
});
