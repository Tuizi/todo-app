import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import tasksStore from '../tasks/store';
import { IAppState } from './models';

const store = configureStore<IAppState>({
  reducer: combineReducers({
    tasks: tasksStore.reducer
  })
});

export default store;
