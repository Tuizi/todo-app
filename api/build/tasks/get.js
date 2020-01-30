"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("./services");
const handler = req => {
    const { taskId } = req.params;
    return services_1.getTask(taskId);
};
exports.default = {
    route: '/:taskId',
    handler
};
