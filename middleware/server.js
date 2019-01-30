const express = require('express')
require('dotenv').config()

const middleware = require('./lib/index')

const app = express()

app.use(express.json())
app.use(middleware.logger)

app.listen(process.env.PORT, () => console.log(`Listening on PORT: ${process.env.PORT}`))