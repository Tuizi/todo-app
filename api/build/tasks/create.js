"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("./services");
const handler = async (req) => {
    const text = req.body.data;
    const task = await services_1.createTask(text);
    return services_1.documentToJson(task);
};
exports.default = {
    route: '/',
    handler
};
