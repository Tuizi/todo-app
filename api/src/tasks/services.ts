import Task, { ITask } from './models';

export const createTask = async (text: string) => {
  const task = new Task({ text });

  return task.save();
};

export const listTasks = async () => Task.find();

export const completeTask = async (taskId: string) => {
  const task = await Task.findById(taskId);

  if (!task) throw new Error('Not found');

  task.complete = true;
  return task.save();
};

export const documentToJson = (task: ITask) => ({
  id: task._id,
  text: task.text,
  complete: task.complete
});
