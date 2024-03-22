import { Response, Request, NextFunction } from "express"

export const logger = ((req: Request, res: Response, next: NextFunction) => {
    console.log(`${req.method} ${req.ip}${req.originalUrl}`)

    next()
})