import { Router, Request,Response } from "express";
import { CalculatorReqBody } from "../types";
import { validateCalculatorReq } from "../middlewares";

export const router = Router()


router.get('/', (req: Request, res) => {
    console.log("Hello Boss!")
    res.send({
        message: 'Get all Calculations',
        timeStamp: req.timestamp,
        data: [
            { id: 1, result: 1},
            { id: 2, result: 2}
        ]
    })
})

router.get('/:id', (req, res) => {
    console.log(`Query parameter: ${JSON.stringify(req.query)}`)
    console.log(`Headers: ${JSON.stringify(req.headers)}`)
    console.log(`Method: ${req.method}`)
    res.send({
        message: 'Get Calculation by ID',
        id: req.params.id,
        result: 1
    })
})

router.post('/', validateCalculatorReq, (req: Request<{}, any, CalculatorReqBody>, res: Response) => {
    const { operator, operand1, operand2 } = req.body
    let result: number | string
    
    switch(operator) {
        case "+":
            result = operand1 + operand2
            break
        case "-":
            result = operand1 - operand2
            break
        case "/":
            result = operand1 / operand2
            break
        case "*":
            result = operand1 * operand2
            break
        default:
            result = 'Invalid operator!'
            break
    }

    res.send({
        message: 'Create a new calculation',
        timeStamp: req.timestamp,
        data: result
    })
})

router.put('/:id', (req: Request, res: Response) => {
    const id = req.params.ID

    // const { operator, operand1, operand2 } = req.body
    let result: number | string

    result = `Updated calculation with ID ${id}`

    res.send({
        message: 'Update calculation by ID',
        timeStamp: req.timestamp,
        data: result
    })
})

router.delete('/:id', (req: Request, res: Response) => {
    const id = req.params.id

    let result: string | number
    result = `Deleted calculation with ID ${id}`

    res.send({
        message: 'Delete calculation by ID',
        timeStamp: req.timestamp,
        data: result
    })
})