"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
exports.router = (0, express_1.Router)();
exports.router.get('/', (req, res) => {
    throw new Error('Application Error');
    res.send({
        message: 'My health is okay!',
        timeStamp: req.timestamp
    });
});
