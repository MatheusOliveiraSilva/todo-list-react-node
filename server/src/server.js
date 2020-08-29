const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const todo = require('./routes/todo')
const user = require('./routes/user')

const app = express()

require('dotenv').config()

const { JWT_PRIVATE_KEY, DB_NAME, DB_HOST } = process.env

if (!JWT_PRIVATE_KEY) {
  console.error('FATAL ERROR: JWT_PRIVATE_KEY is not defined.')
  process.exit(1)
}

app.use(cors())

app.use(express.json())

app.use('/todo', todo)
app.use('/user', user)

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}

mongoose.connect(`mongodb://${DB_HOST}/${DB_NAME}`, options)

const port = process.env.PORT || 9000

app.listen(port, () => console.log(`Server running on ${port}`))
