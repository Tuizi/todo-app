"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const create_1 = __importDefault(require("./create"));
const complete_1 = __importDefault(require("./complete"));
const list_1 = __importDefault(require("./list"));
const response_controller_1 = __importDefault(require("../api/response-controller"));
const router = express_1.default.Router();
router.patch(complete_1.default.route, response_controller_1.default(complete_1.default.handler));
router.post(create_1.default.route, response_controller_1.default(create_1.default.handler));
router.get(list_1.default.route, response_controller_1.default(list_1.default.handler));
exports.default = router;
