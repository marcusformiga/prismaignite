import express, { NextFunction, Request, Response } from "express"
import "express-async-errors"
import { AppError } from "../errors/AppError"
import { routes } from "../routes/routes"

const app = express()
const port = 3001
app.use(express.json())
app.use(routes)
app.get("/", (request, response) =>{
  return response.send("Hello")
})
app.use((err: Error, request: Request, response: Response, next: NextFunction) =>{
  if(err instanceof AppError){
    return response.status(err.status).json({
      message: err.message
    })
  }
  return response.status(500).json({
    message: "Internal server error"
  })
})

app.listen(port, () =>{
  console.log(`Server running on port ${port}`)
})