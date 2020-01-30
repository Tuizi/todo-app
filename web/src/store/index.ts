import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import tasksStore from '../tasks/store';

const store = configureStore({
  reducer: combineReducers({
    tasks: tasksStore.reducer
  })
});

export default store;
