"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = __importDefault(require("./models"));
exports.createTask = async (text) => {
    const task = new models_1.default(text);
    return task.save();
};
exports.listTasks = async () => models_1.default.find();
exports.getTask = async (id) => {
    return await [
        {
            id,
            text: 'bite of' + id
        }
    ];
};
