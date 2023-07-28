import { applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import dragonsSlice from './dragons/dragonsSlice';
import missionSlice from './missions/missionSlice';
import rocketsSlice from './rockets/rocketsSlice';

const store = configureStore({
  reducer: {
    dragons: dragonsSlice,
    missions: missionSlice,
    rockets: rocketsSlice,
  },
},
applyMiddleware(thunk, logger));

const selectMissions = (store) => store.missions;
const selectDragons = (store) => store.dragons;

export { selectMissions, selectDragons };

export default store;
