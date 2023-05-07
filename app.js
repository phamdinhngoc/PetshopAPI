import express from 'express'
import cors from 'cors'

import petRoutes from './pets/routers/pets.routes.js'

const app = express()
const port = 5000

/* Global middlewares*/
app.use(cors())
app.use(express.json())

/* routes */
app.use('/pets', petRoutes)

/* Server Setup */
if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => console.log(`[Server]: Server is running at https://localhost:${port}`))
}

export default app