import { requestApi } from '../services/api';
import { ITask } from './models';

const API_TASKS_PATH = 'tasks/';

export const createTask = async (text: string) =>
  requestApi<ITask>(`${API_TASKS_PATH}`, 'post', text);

export const listTasks = async () => requestApi<ITask[]>(`${API_TASKS_PATH}`);

export const completeTask = async (taskId: string) =>
  requestApi<ITask>(`${API_TASKS_PATH}${taskId}/complete`, 'patch');
