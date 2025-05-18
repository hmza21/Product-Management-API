import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import productsRouter from './routes/products.js'

dotenv.config()
const PORT = process.env.PORT;

const app = express()
app.use(cors())
app.use(express.json())

app.use("/api/products", productsRouter)
app.use((request, response) => response.json("404"))

app.listen(PORT, () => console.log(`alive on ${PORT}`))
