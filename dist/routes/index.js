"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cookieRouter = exports.calRouter = exports.healthRouter = void 0;
var health_routes_1 = require("./health.routes");
Object.defineProperty(exports, "healthRouter", { enumerable: true, get: function () { return health_routes_1.router; } });
var calculator_routes_1 = require("./calculator.routes");
Object.defineProperty(exports, "calRouter", { enumerable: true, get: function () { return calculator_routes_1.router; } });
var cookies_routes_1 = require("./cookies.routes");
Object.defineProperty(exports, "cookieRouter", { enumerable: true, get: function () { return cookies_routes_1.router; } });
