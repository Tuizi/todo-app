"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("./tasks/router"));
const morgan_1 = __importDefault(require("morgan"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = express_1.default();
const port = 6000;
app.use(morgan_1.default('combined'));
app.use(body_parser_1.default.json());
app.use('/api/tasks', router_1.default);
app.listen(port, () => console.log(`listening on port ${port}!`));
