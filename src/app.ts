import express from 'express'
import { healthRouter, calRouter, cookieRouter } from './routes'
import { errorHandler, logger, timeStamp } from './middlewares'
import cookieParser from 'cookie-parser'

const app = express()
const PORT = 4520

app.use(cookieParser())
app.use(express.json())
app.use(timeStamp)
app.use(logger)
app.use('/cookies', cookieRouter)
app.use('/health', healthRouter)
app.use('/calculator', calRouter)

app.use(errorHandler)

app.listen((PORT), () => {
    console.log(`App is running on PORT http://localhost:${PORT}`)
})
