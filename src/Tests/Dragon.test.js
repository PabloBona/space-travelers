import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Dragons from '../components/Dragons';

test('renders loading state correctly', () => {
  render(
    <Provider store={store}>
      <Dragons />
    </Provider>,
  );

  const h2Element = screen.getByText(/Loading/i);
  const loadingElement = screen.getByTestId('h2test');

  expect(loadingElement).toBeInTheDocument();
  expect(h2Element).toBeInTheDocument();
});
