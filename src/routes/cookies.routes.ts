import express, { Request, Response } from 'express'

export const router = express.Router()

router.get('/', (req: Request, res: Response ) => {
    // get Cookie from the Request
    const cookieValue = req.cookies['cookieName']

    if (cookieValue) {
        res.cookie('cookieName', cookieValue, { maxAge: 900000, httpOnly: true })
        res.send(`Cookie value: ${cookieValue}`)
    } else {
        res.send('No cookie found!')
    }

})