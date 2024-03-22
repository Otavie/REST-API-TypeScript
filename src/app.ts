import express from 'express'
import { healthRouter, calRouter } from './routes'
import { logger, timeStamp } from './middlewares'

const app = express()
const PORT = 4520

app.use(timeStamp)
app.use(logger)
app.use('/health', healthRouter)
app.use('/calculator', calRouter)

app.listen((PORT), () => {
    console.log(`App is running on PORT http://localhost:${PORT}`)
})
