"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("./services");
const handler = () => {
    return services_1.listTasks();
};
exports.default = {
    route: '/',
    handler
};
