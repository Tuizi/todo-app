"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("./services");
const handler = req => {
    const text = req.body;
    return services_1.createTask(text);
};
exports.default = {
    route: '/',
    handler
};
