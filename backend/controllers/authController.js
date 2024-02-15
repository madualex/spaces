import User from '../models/userModel.js'
import bcryptjs from 'bcryptjs'

const register = async (req, res) => {
  const { username, email, password } = req.body

  if (!username || !email || !password || username === '' || email === '' || password === '') {
    res.status(400).json({ message: "All fields are required" })
  }

  const hashedPwd = bcryptjs.hashSync(password)

  const newUser = new User({
    username,
    email,
    password: hashedPwd
  })

  try {
    await newUser.save()
    res.status(201).json({ message: "User has been regsitered successfully" })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }


}

export default register