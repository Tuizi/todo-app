import { IAppState } from '../store/models';

export const selectTasks = (state: IAppState) => state.tasks;
export const selectTasksCollection = (state: IAppState) =>
  selectTasks(state).collection;
