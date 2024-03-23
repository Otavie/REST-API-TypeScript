"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCalculatorReq = void 0;
const validateCalculatorReq = (req, res, next) => {
    const { operator, operand1, operand2 } = req.body;
    if (!operator) {
        return res.status(400).send('Add an operator!');
    }
    if (!operand1 || !operand1) {
        return res.status(400).send('Make sure operand1 and operand2 are not empty!');
    }
    if (typeof operand1 !== 'number' || typeof operand2 !== 'number') {
        return res.status(400).send('Operands must be numbers!');
    }
    if (operator !== '+' && operator !== '-' && operator !== '/' && operator !== '*') {
        return res.status(400).send('Operator must be +, -, * or /');
    }
    next();
};
exports.validateCalculatorReq = validateCalculatorReq;
