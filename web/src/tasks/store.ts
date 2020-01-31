import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';
import { ITasksState, ITask } from './models';
import { createTask } from './api';

const tasksStore = createSlice({
  name: 'tasks',
  initialState: {
    collection: [],
    loading: false,
    error: null
  } as ITasksState,
  reducers: {
    // ℹ️ Toolkit include immerjs so we can mutate the state
    newTaskStart: state => {
      state.loading = true;
      state.error = null;
    },
    newTaskSuccess: (state, action: PayloadAction<ITask>) => {
      state.collection.push(action.payload);
    },
    newTaskFailure: (state, action: PayloadAction<Error>) => {
      state.error = action.payload;
    }
  }
});

const newTaskAction = (text: string) => async (dispatch: Dispatch) => {
  try {
    dispatch(tasksStore.actions.newTaskStart());
    const task = await createTask(text);
    dispatch(tasksStore.actions.newTaskSuccess(task));
  } catch (err) {
    dispatch(tasksStore.actions.newTaskFailure(err));
  }
};

export default {
  ...tasksStore,
  actions: {
    ...tasksStore.actions,
    newTask: newTaskAction
  }
};
