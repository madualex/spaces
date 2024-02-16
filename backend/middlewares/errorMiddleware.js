export const errorHandler = (err, req, res, next) => {
  // everytime there is an error whenever a request is made to the api, first thing is to ensure there is a status code which will be sent back as response to the client
  const statusCode = res.statusCode ? res.statusCode : 500 // server error
  res.status(statusCode)

  // next thing to do is to send the exact error message to the client as well as the exact line the error is found using the stack property but only during development. If in production, there is no need to send the error stack as that maybe a sensitive information
  res.json({
    success: false,
    message: err.message,
    stack: process.env.NODE_ENV === 'development' ? err.stack : null
  })
  next()
}