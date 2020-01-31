"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("./services");
const handler = async (req) => {
    const { taskId } = req.params;
    const task = await services_1.completeTask(taskId);
    return services_1.documentToJson(task);
};
exports.default = {
    route: '/:taskId/complete',
    handler
};
