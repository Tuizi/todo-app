import { IAppState } from '../store/models';

const selectTasksState = (state: IAppState) => state.tasks;

export const selectTasks = (state: IAppState) =>
  selectTasksState(state).collection;
export const selectTasksLoadingStatus = (state: IAppState) =>
  selectTasksState(state).loading;
export const selectTasksError = (state: IAppState) =>
  selectTasksState(state).error;
