import express from 'express'

import { Request, Response } from 'express'
import { router } from "./routes/index"

const app = express()
const port = 8089

app.use(express.json())
app.use(router)

app.get('/', (req: Request, res: Response) => {
    res.json("Hello world")
})

app.listen(port, () => console.log(`Server rodando na porta ${port}`))