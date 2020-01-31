import mongoose from 'mongoose';

export interface ITask extends mongoose.Document {
  text: string;
  complete: boolean;
}

export const TaskSchema = new mongoose.Schema({
  text: { type: String, required: true },
  complete: { type: Boolean, required: false }
});

const Task = mongoose.model<ITask>('Task', TaskSchema);

export default Task;
