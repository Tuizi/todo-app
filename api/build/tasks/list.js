"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("./services");
const handler = async () => {
    const tasks = await services_1.listTasks();
    return tasks.map(services_1.documentToJson);
};
exports.default = {
    route: '/',
    handler
};
