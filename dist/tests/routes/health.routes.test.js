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
describe('Health Routes', () => {
    it('Get /health should return 200 with expected body properties', () => __awaiter(void 0, void 0, void 0, function* () {
        // Send a GET request to the /health endpoint
        const response = yield setup_1.request.get('/health');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('message', 'My health is okay!');
        expect(response.body).toHaveProperty('timeStamp');
        expect(new Date(response.body.timeStamp)).toBeInstanceOf(Date);
    }));
});
