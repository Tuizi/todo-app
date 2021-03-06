import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';
import { ITasksState, ITask } from './models';
import { createTask, listTasks, completeTask } from './api';

const tasksStore = createSlice({
  name: 'tasks',
  initialState: {
    collection: [],
    loading: false,
    error: null
  } as ITasksState,
  reducers: {
    // ℹ️ Toolkit include immerjs so we can mutate the state
    loading: state => {
      state.loading = true;
      state.error = null;
    },
    failure: (state, action: PayloadAction<Error>) => {
      state.error = action.payload;
    },
    add: (state, action: PayloadAction<ITask>) => {
      state.collection.push(action.payload);
    },
    set: (state, action: PayloadAction<ITask[]>) => {
      state.collection = action.payload;
    },
    update: (state, action: PayloadAction<ITask>) => {
      const taskUpdated = action.payload;
      const indexOfTaskToUpdate = state.collection.findIndex(
        task => task.id === taskUpdated.id
      );

      state.collection[indexOfTaskToUpdate] = taskUpdated;
    }
  }
});

const newTaskAction = (text: string) => async (dispatch: Dispatch) => {
  try {
    dispatch(tasksStore.actions.loading());
    const task = await createTask(text);
    dispatch(tasksStore.actions.add(task));
  } catch (err) {
    dispatch(tasksStore.actions.failure(err));
  }
};

const listTaskAction = () => async (dispatch: Dispatch) => {
  try {
    dispatch(tasksStore.actions.loading());
    const tasks = await listTasks();
    dispatch(tasksStore.actions.set(tasks));
  } catch (err) {
    dispatch(tasksStore.actions.failure(err));
  }
};
const completeTaskAction = (taskId: string) => async (dispatch: Dispatch) => {
  try {
    dispatch(tasksStore.actions.loading());
    const task = await completeTask(taskId);
    dispatch(tasksStore.actions.update(task));
  } catch (err) {
    dispatch(tasksStore.actions.failure(err));
  }
};

export default {
  ...tasksStore,
  actions: {
    ...tasksStore.actions,
    newTask: newTaskAction,
    listTask: listTaskAction,
    completeTask: completeTaskAction
  }
};
