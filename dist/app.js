"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 4520;
app.get('/', (req, res) => {
    console.log("Hello Boss!");
    res.send("Hello Boss!");
});
app.get('/:id', (req, res) => {
    console.log(`Query parameter: ${JSON.stringify(req.query)}`);
    console.log(`Headers: ${JSON.stringify(req.headers)}`);
    console.log(`Method: ${req.method}`);
    res.send(`Hello ${req.params.id}`);
});
app.get('/health', (req, res) => {
    res.send('My health is okay!');
});
app.listen((PORT), () => {
    console.log(`App is running on PORT http://localhost:${PORT}`);
});
