import express, { Request, Response} from 'express'

export const router = express.Router()

router.get('/', (req: Request, res: Response) => {
    if (req.secret) {
        res.send('This request is secure (HTTPS)!')
    } else {
        res.send('This request is not secure (HTTP)!')
    }
})