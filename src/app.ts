import express from 'express'
import { healthRouter, calRouter } from './routes'

const app = express()
const PORT = 4520

app.use('/health', healthRouter)
app.use('/calculator', calRouter)

app.listen((PORT), () => {
    console.log(`App is running on PORT http://localhost:${PORT}`)
})
