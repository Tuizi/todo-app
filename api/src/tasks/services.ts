import Task from './models';

export const createTask = async (text: string) => {
  const task = new Task(text);

  return task.save();
};

export const listTasks = async () => Task.find();

export const getTask = async (id: string) => {
  return await [
    {
      id,
      text: 'bite of' + id
    }
  ];
};
