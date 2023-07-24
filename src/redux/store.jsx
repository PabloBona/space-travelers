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
const selectRockets = (store) => store.rockets;
const selectDragons = (store) => store.dragons;

export { selectMissions, selectRockets, selectDragons };

export default store;
