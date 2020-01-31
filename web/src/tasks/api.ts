import { requestApi } from '../services/api';
import { ITask } from './models';

const API_TASKS_PATH = 'tasks/';

export const createTask = async (text: string) =>
  requestApi<ITask>(`${API_TASKS_PATH}`, text, 'post');
