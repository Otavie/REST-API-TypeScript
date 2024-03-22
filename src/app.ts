import express from 'express'
import { healthRouter } from './routes'

const app = express()
const PORT = 4520

app.use('/health', healthRouter)

app.listen((PORT), () => {
    console.log(`App is running on PORT http://localhost:${PORT}`)
})
