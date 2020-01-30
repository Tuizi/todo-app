export type TaskState = 'completed' | 'todo';

export interface ITask {
  text: string;
  state: TaskState;
}

export interface ITasksState {
  collection: ITask[];
}
