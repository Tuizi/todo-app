"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
exports.TaskSchema = new mongoose_1.default.Schema({
    text: { type: String, required: true }
});
const Task = mongoose_1.default.model('Task', exports.TaskSchema);
exports.default = Task;
