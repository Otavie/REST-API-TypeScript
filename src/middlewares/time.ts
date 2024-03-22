import { Request, Response, NextFunction } from "express";

export const timeStamp = (req: Request, res: Response, next: NextFunction) => {
    req.timestamp = Date.now()

    next()
}