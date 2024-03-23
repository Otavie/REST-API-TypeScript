"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
exports.router = express_1.default.Router();
exports.router.get('/', (req, res) => {
    // get Cookie from the Request
    const cookieValue = req.cookies['cookieName'];
    if (cookieValue) {
        res.cookie('cookieName', cookieValue, { maxAge: 900000, httpOnly: true });
        res.send(`Cookie value: ${cookieValue}`);
    }
    else {
        res.send('No cookie found!');
    }
});
