import express from "express"
import cors from "cors"
import { errorHandler } from "./utils/globalErrorHandler.js"

const app = express()

app.use(
    cors({
        origin:process.env.CORS_ORIGIN,
        credentials:true,
    })
)

app.use(
    express.json({
        limit:"16kb",
    })
)

app.use(
    express.urlencoded({
        extended:true,
        limit:"16kb",
    })
)

app.use(
    express.static("public")
)



app.get('/', (req, res) => {
  res.send('Hello World!')
})


import requirementRouter from "./routers/requirement.router.js"

app.use("/",requirementRouter)

app.use(errorHandler)

export {
    app
}