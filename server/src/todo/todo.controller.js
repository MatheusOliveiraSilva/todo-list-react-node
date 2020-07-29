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
	const { task } = req.body

	const todoList = await TodoList.findById(req.params.id)

	if (!task || task === '') return res.status(404).send('Insert a valid task.')

	if (todoList.tasks.includes(task))
		return res.status(404).send('This task already exist in the list.')

	todoList.tasks = [...todoList.tasks, task]

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

const renameTodo = async (req, res) => {
	const todoList = await TodoList.findById(req.params.id)

	if (!todoList.tasks.includes(req.body.oldName))
		return res.status(404).send('This task does not exist in the list.')

	if (todoList.tasks.includes(req.body.newName))
		return res.status(404).send('The new task already exist in the list.')

	const index = todoList.tasks.indexOf(req.body.oldName)

	todoList.tasks.splice(index, 1, req.body.newName)

	await todoList.save()

	res.send('Task renamed successfully.')
}

module.exports = {
	getAllList,
	createList,
	deleteList,
	addTodo,
	removeTodo,
	renameTodo,
}
