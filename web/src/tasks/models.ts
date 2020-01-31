export type TaskState = 'completed' | 'todo';

export interface ITask {
  text: string;
  state: TaskState;
  id: string;
  complete?: boolean;
}

export interface ITasksState {
  collection: ITask[];
  loading: boolean;
  error: Error | null;
}
