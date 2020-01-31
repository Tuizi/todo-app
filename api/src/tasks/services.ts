import Task, { ITask } from './models';

export const createTask = async (text: string) => {
  const task = new Task({ text });

  return task.save();
};

export const listTasks = async () => Task.find();

export const documentToJson = (task: ITask) => ({
  id: task._id,
  text: task.text
});
