import express from 'express'
import { Request, Response } from 'express'
import { router } from "./routes/index"
import dotenv from "dotenv"

dotenv.config()
const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(router)

app.get('/', (req: Request, res: Response) => {
    res.json("Hello world")
})

app.listen(port, () => console.log(`Server rodando na porta ${port}`))