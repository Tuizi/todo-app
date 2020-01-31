import mongoose from 'mongoose';

export interface ITask extends mongoose.Document {
  text: string;
}

export const TaskSchema = new mongoose.Schema({
  text: { type: String, required: true }
});

const Task = mongoose.model<ITask>('Task', TaskSchema);

export default Task;
