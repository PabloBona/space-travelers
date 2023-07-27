import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Rockets from '../components/Rockets';

test('renders loading state correctly', () => {
  render(
    <Provider store={store}>
      <Rockets />
    </Provider>,
  );

  const loadingElement = screen.getByText(/Loading/i);
  expect(loadingElement).toBeInTheDocument();
});
