export type TaskState = 'completed' | 'todo';

export interface ITask {
  text: string;
  state: TaskState;
  id: string;
}

export interface ITasksState {
  collection: ITask[];
  loading: boolean;
  error: Error | null;
}
