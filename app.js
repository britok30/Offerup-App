const express = require('express')
const app = express() 

// import routes
const index = require('./routes/index')
const auth = require("./routes/auth")

// set routes
app.use('/', index)
app.use("/auth", auth)

module.exports = app