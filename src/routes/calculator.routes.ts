import { Router } from "express";

export const router = Router()


router.get('/', (req, res) => {
    console.log("Hello Boss!")
    res.send("Hello Boss!")
})

router.get('/:id', (req, res) => {
    console.log(`Query parameter: ${JSON.stringify(req.query)}`)
    console.log(`Headers: ${JSON.stringify(req.headers)}`)
    console.log(`Method: ${req.method}`)
    res.send(`Hello ${req.params.id}`)
})
