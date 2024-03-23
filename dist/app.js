"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const middlewares_1 = require("./middlewares");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
// import { createServer } from 'http'
// jest.mock('http', () => ({
//     createServer: jest.fn()
// }))
exports.app = (0, express_1.default)();
const PORT = 45223;
exports.app.use((0, cookie_parser_1.default)());
exports.app.use(express_1.default.json());
exports.app.use(middlewares_1.timeStamp);
exports.app.use(middlewares_1.logger);
exports.app.use('/', routes_1.securityRouter);
exports.app.use('/cookies', routes_1.cookieRouter);
exports.app.use('/health', routes_1.healthRouter);
exports.app.use('/calculator', routes_1.calRouter);
exports.app.use(middlewares_1.errorHandler);
// app.listen = jest.fn()
// app.listen((PORT), () => {
//     console.log(`App is running on PORT http://localhost:${PORT}`)
// })
