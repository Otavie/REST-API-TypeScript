import express from 'express'
import { healthRouter, calRouter, cookieRouter, securityRouter } from './routes'
import { errorHandler, logger, timeStamp } from './middlewares'
import cookieParser from 'cookie-parser'
// import { createServer } from 'http'

// jest.mock('http', () => ({
//     createServer: jest.fn()
// }))

export const app = express()
const PORT = 45223

app.use(cookieParser())
app.use(express.json())
app.use(timeStamp)
app.use(logger)
app.use('/', securityRouter)
app.use('/cookies', cookieRouter)
app.use('/health', healthRouter)
app.use('/calculator', calRouter)

app.use(errorHandler)

// app.listen = jest.fn()

app.listen((PORT), () => {
    console.log(`App is running on PORT http://localhost:${PORT}`)
})
