import User from '../models/userModel.js'
import asyncHandler from 'express-async-handler'
import bcryptjs from 'bcryptjs'

const register = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body

  if (!username || !email || !password || username === '' || email === '' || password === '') {
    res.status(400)
    throw new Error("All fields are required")
  }
  
  const userExists = await User.findOne({ email })
  if (userExists) {
    res.status(400)
    throw new Error("Email has already been registered")
  }

  const hashedPwd = bcryptjs.hashSync(password)

  const newUser = await User.create({
    username,
    email,
    password: hashedPwd
  })

  if (newUser) {
    res.status(201).json("Username has been registered successfully")
  }

})

export default register