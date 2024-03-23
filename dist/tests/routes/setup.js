"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.request = void 0;
const supertest = require('supertest');
const { app } = require('./../../app');
// Create a supertest agent for making requests to the Express app
exports.request = supertest(app);
