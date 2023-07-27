import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { act } from 'react-dom/test-utils';
import store from '../redux/store';
import Dragons from '../components/Dragons';

test('renders loading state correctly in DragonTest', () => {
  act(() => {
    render(
      <Provider store={store}>
        <Dragons />
      </Provider>,
    );
  });

  const h2Element = screen.getByText(/Loading/i);
  const loadingElement = screen.getByTestId('h2test');

  expect(loadingElement).toBeInTheDocument();
  expect(h2Element).toBeInTheDocument();
});
