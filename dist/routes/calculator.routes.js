"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
exports.router = (0, express_1.Router)();
exports.router.get('/', (req, res) => {
    console.log("Hello Boss!");
    res.send({
        message: 'Get all Calculations',
        timeStamp: req.timestamp,
        data: [
            { id: 1, result: 1 },
            { id: 2, result: 2 }
        ]
    });
});
exports.router.get('/:id', (req, res) => {
    console.log(`Query parameter: ${JSON.stringify(req.query)}`);
    console.log(`Headers: ${JSON.stringify(req.headers)}`);
    console.log(`Method: ${req.method}`);
    res.send({
        message: 'Get Calculation by ID',
        id: req.params.id,
        result: 1
    });
});
exports.router.post('/', (req, res) => {
    res.send({
        message: 'Create a new calculation',
        timeStamp: req.timestamp,
        data: req.body
    });
});
