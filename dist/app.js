"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const app = (0, express_1.default)();
const PORT = 4520;
app.use((req, res, next) => {
    console.log(`${req.method} ${req.ip}${req.originalUrl}`);
    next();
});
app.use('/health', routes_1.healthRouter);
app.use('/calculator', routes_1.calRouter);
app.listen((PORT), () => {
    console.log(`App is running on PORT http://localhost:${PORT}`);
});
