const express = require('express')
require('dotenv').config()

const app = express()

app.use('/users', require('./routes/users.js'))

app.listen(process.env.PORT)