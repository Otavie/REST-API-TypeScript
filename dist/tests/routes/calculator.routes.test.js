"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const setup_1 = require("./setup");
describe('Calculator Routes', () => {
    it('GET /calculator should return all calculations', () => __awaiter(void 0, void 0, void 0, function* () {
        // Send a GET request to the /calculator endpoint
        const response = yield setup_1.request.get('/calculator');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('message', 'Get all Calculations');
        expect(response.body).toHaveProperty('data');
        expect(Array.isArray(response.body.data)).toBe(true);
    }));
    it('GET /calculator/:id should return calculation by ID', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield setup_1.request.get('/calculator/123');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('message', 'Get Calculation by ID');
        expect(response.body).toHaveProperty('id', '123');
        expect(response.body).toHaveProperty('result', 1);
    }));
    it('POST /calculator should create a new calculation', () => __awaiter(void 0, void 0, void 0, function* () {
        const requestBody = { operator: '+', operand1: 2, operand2: 4 };
        const response = yield setup_1.request.post('/calculator').send(requestBody);
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('message', 'Create a new calculation');
        expect(response.body).toHaveProperty('data');
        expect(typeof response.body.data).toBe('number');
        expect(response.body.data).toBe(6);
    }));
    it('PUT /calculator/:id should update a calculation by ID', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield setup_1.request.put('/calculator/123').send({});
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('message', 'Update calculation by ID');
        expect(response.body).toHaveProperty('data');
        expect(response.body).toHaveProperty('id', '123');
        expect(response.body).toHaveProperty('timeStamp');
        expect(typeof response.body.data).toBe('string');
    }));
    it('DELETE /calculator/:id should delete a calculation by ID', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield setup_1.request.delete('/calculator/123');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('message', 'Delete calculation by ID');
        expect(response.body).toHaveProperty('data');
        expect(response.body).toHaveProperty('id', '123');
        expect(response.body).toHaveProperty('timeStamp');
        expect(typeof response.body.data).toBe('string');
    }));
});
