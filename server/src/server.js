const express = require('express')
const mongoose = require('mongoose')
const config = require('config')

const todo = require('./routes/todo')
const user = require('./routes/user')

const app = express()

if (!config.get('jwtPrivateKey')) {
	console.error('FATAL ERROR: jwtPrivateKey is not defined.')
	process.exit(1)
}

app.use(express.json())

app.use('/todo', todo)
app.use('/user', user)

app.get('/', (req, res) => {
	res.send('Hello man')
})

const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: true,
}

mongoose.connect('mongodb://localhost/todo-list-react-node', options)

const port = process.env.PORT || 9000

app.listen(port, () => console.log(`Server running on ${port}`))
