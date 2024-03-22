"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeStamp = void 0;
const timeStamp = (req, res, next) => {
    req.timestamp = Date.now();
    next();
};
exports.timeStamp = timeStamp;
