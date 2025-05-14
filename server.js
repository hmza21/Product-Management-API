import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

const app = express()
app.use(cors())
dotenv.config()

const PORT = process.env.PORT

app.get("/", (request, response) => {
    response.send({
        test: "test"
    })
})

app.use((request, response) => {
    response.json("404")
})

app.listen(PORT, () => {
    console.log(`alive on ${PORT}`)
})
