const supertest = require('supertest');
const { app } = require('./../../app');

// Create a supertest agent for making requests to the Express app
export const request = supertest(app);