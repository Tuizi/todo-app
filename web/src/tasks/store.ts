import { createSlice } from '@reduxjs/toolkit';
import { ITasksState } from './models';

export default createSlice<ITasksState, {}>({
  name: 'tasks',
  initialState: {
    collection: []
  },
  reducers: {}
});
