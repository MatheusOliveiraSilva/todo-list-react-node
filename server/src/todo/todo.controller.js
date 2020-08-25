const { TodoList } = require('./todo.model')

const getAllLists = async (req, res) => {
	try {
		const todoList = await TodoList.find({ user: { _id: req.user._id } })
			.populate('user')
			.select('-__v')

		res.send(todoList)
	} catch (err) {
		res.send(err)
	}
}

const createList = async (req, res) => {
	const { name } = req.body

	try {
		const todoList = new TodoList({ name, user: req.user._id })

		await todoList.save()

		res.send('List created sucessfully')
	} catch (err) {
		res.send(err)
	}
}

const renameList = async (req, res) => {
	const { name: newName } = req.body

	try {
		const todoList = await TodoList.findById(req.params.id)

		if (todoList.name === newName)
			return res
				.status(404)
				.send('The new name must be different of the older one.')

		todoList.name = newName
		await todoList.save()
		res.send('List renamed successfully')
	} catch (err) {
		res.send(err)
	}
}

const deleteList = async (req, res) => {
	try {
		await TodoList.findByIdAndDelete(req.params.id)
		res.send('List deleted successfully')
	} catch (err) {
		res.send(err)
	}
}

const addTodo = async (req, res) => {
	const { task } = req.body

	try {
		const todoList = await TodoList.findById(req.params.id)

		if (!task || task === '')
			return res.status(404).send('Insert a valid task.')

		if (todoList.tasks.includes(task))
			return res.status(404).send('This task already exist in the list.')

		todoList.tasks = [...todoList.tasks, task]

		await todoList.save()

		res.send('Todo added successfully.')
	} catch (err) {
		res.send(err)
	}
}

const removeTodo = async (req, res) => {
	const { task } = req.body

	try {
		const todoList = await TodoList.findById(req.params.id)

		if (!task || task === '')
			return res.status(404).send('Insert a valid task.')

		todoList.tasks = todoList.tasks.filter(item => item !== task)

		await todoList.save()

		res.send('Todo removed successfully.')
	} catch (err) {
		res.send(err)
	}
}

const renameTodo = async (req, res) => {
	const { oldName, newName } = req.body

	try {
		const todoList = await TodoList.findById(req.params.id)

		if (!todoList.tasks.includes(oldName))
			return res.status(404).send('This task does not exist in the list.')

		if (todoList.tasks.includes(newName))
			return res.status(404).send('The new task already exist in the list.')

		const index = todoList.tasks.indexOf(oldName)

		todoList.tasks.splice(index, 1, newName)

		await todoList.save()

		res.send('Task renamed successfully.')
	} catch (err) {
		res.send(err)
	}
}

module.exports = {
	getAllLists,
	createList,
	renameList,
	deleteList,
	addTodo,
	removeTodo,
	renameTodo,
}
