"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("./tasks/router"));
const app = express_1.default();
const port = 6000;
app.use('/tasks', router_1.default);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
