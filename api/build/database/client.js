"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const auth = `${process.env.DB_USER}:${process.env.DB_PASS}`;
const database = `${process.env.DB_HOST}/${process.env.DB_NAME}`;
const uri = `mongodb://${auth}@${database}`;
mongoose_1.default.connect(uri, {
    useNewUrlParser: true
}, err => {
    if (err) {
        throw new Error(err.message);
    }
    console.log('Successfully connected to', uri);
});
exports.default = mongoose_1.default;
