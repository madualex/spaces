import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import authRoutes from '../backend/routes/authRoute.js'

dotenv.config()

const app = express()

app.use(express.json()) // allows client app to send json to the end
app.use('/api/auth', authRoutes)

mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log('Mogodb is connected');
})
.catch((err)=> {
  console.log(err);
})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
})