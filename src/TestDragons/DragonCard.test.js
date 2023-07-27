import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import axios from './__mocks__/axios';
import DragonCard from '../components/DragonCard';
import dragonsSlice from '../redux/dragons/dragonsSlice';

jest.mock('axios');

const store = configureStore({
  reducer: {
    dragons: dragonsSlice,
  },
});

test('renders a dragon card correctly', async () => {
  // Define los datos del dragón a ser mostrados en el componente DragonCard
  const dragon = {
    id: 'dragon1',
    name: 'Dragon 1',
    description: 'Dragon 1 description',
  };

  // Mockea la respuesta de axios cuando la URL sea "https://api.spacexdata.com/v3/dragons"
  axios.get.mockResolvedValueOnce({
    data: axios.dragonsData, // dragonsData es la información que retornamos en el archivo axios.js
  });

  const { container } = render(
    <Provider store={store}>
      <DragonCard dragon={dragon} />
    </Provider>,
  );

  expect(container.firstChild).toMatchSnapshot();
  expect(screen.getByText('Dragon 1')).toBeInTheDocument();
  expect(screen.getByText('Dragon 1 description')).toBeInTheDocument();
  // ... Añade más expectativas según la lógica de tu componente DragonCard
});
