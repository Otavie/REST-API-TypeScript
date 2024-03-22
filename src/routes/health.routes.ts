import { Router, Request, Response } from "express";

export const router = Router()

router.get('/', (req: Request, res: Response) => {
    res.send({
        message: 'My health is okay!',
        timeStamp: req.timestamp
    })
})