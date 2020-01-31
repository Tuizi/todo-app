"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = __importDefault(require("./models"));
exports.createTask = async (text) => {
    const task = new models_1.default({ text });
    return task.save();
};
exports.listTasks = async () => models_1.default.find();
exports.completeTask = async (taskId) => {
    const task = await models_1.default.findById(taskId);
    if (!task)
        throw new Error('Not found');
    task.complete = true;
    return task.save();
};
exports.documentToJson = (task) => ({
    id: task._id,
    text: task.text,
    complete: task.complete
});
