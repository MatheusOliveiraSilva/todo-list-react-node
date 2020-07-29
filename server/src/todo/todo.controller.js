const { TodoList } = require('./todo.model')

const getAllList = async (req, res) => {
	const todoList = await TodoList.find().populate('user').select('-__v')

	res.send(todoList)
}

const createList = async (req, res) => {
	const { name, task } = req.body
	const todoList = new TodoList({ name, task, user: req.user._id })

	await todoList.save()

	res.send('List created sucessfully')
}

const deleteList = async (req, res) => {
	try {
		await TodoList.findOneAndRemove(req.params.id)
		res.send('List deleted successfully.')
	} catch (err) {
		res.send(err)
	}
}

const addTodo = async (req, res) => {
	const todoList = await TodoList.findById(req.params.id)

	if (!req.body.task || req.body.task === '')
		return res.status(404).send('Insert a valid task.')

	todoList.tasks = [...todoList.tasks, req.body.task]

	await todoList.save()

	res.send('Todo added successfully.')
}

const removeTodo = async (req, res) => {
	const { task } = req.body
	const todoList = await TodoList.findById(req.params.id)

	if (!task || task === '') return res.status(404).send('Insert a valid task.')

	todoList.tasks = todoList.tasks.filter(item => item !== task)

	await todoList.save()

	res.send('Todo removed successfully.')
}

module.exports = { getAllList, createList, deleteList, addTodo, removeTodo }
