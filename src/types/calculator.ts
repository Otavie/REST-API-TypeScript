export interface CalculatorReqBody {
    operator: '+' | '-' | '/' | '*';
    operand1: number;
    operand2: number;
}