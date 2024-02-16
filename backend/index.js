import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import authRoutes from '../backend/routes/authRoute.js'
import { errorHandler } from './middlewares/errorMiddleware.js'

dotenv.config()

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json()) // allows client app to send json to the end

app.use('/api/auth', authRoutes)


app.use(errorHandler)

mongoose.connect(process.env.MONGO_URI)
.then(() => {
  app.listen(5000, () => {
    console.log("Server is running on port 5000");
  })
})
.catch((err)=> {
  console.log(err);
})