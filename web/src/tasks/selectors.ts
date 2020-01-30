import { IAppState } from '../store/models';

export const selectTasks = (state: IAppState) => state.tasks;
