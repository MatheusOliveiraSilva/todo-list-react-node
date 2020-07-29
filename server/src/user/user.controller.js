const User = require('./user.model')
const bcrypt = require('bcrypt')

const authenticate = async (req, res) => {
	const { username, password } = req.body

	try {
		const user = await User.findOne({ username })

		if (user && (await bcrypt.compare(password, user.hash))) {
			const token = user.generateAuthToken()

			const result = { ...user.toJSON(), token }

			res.send(result)
		}
	} catch (err) {
		res.send(err)
	}
}

const getAll = async (req, res) => {
	try {
		const users = await User.find()
		res.send(users)
	} catch (err) {
		res.send(err)
	}
}

const getById = async (req, res) => {
	try {
		const user = await User.findById(req.params.id).select('-hash')
		res.send(user)
	} catch (err) {
		res.send(err)
	}
}

const getCurrent = async (req, res) => {
	try {
		const user = await User.findById(req.user._id).select('-hash')
		res.send(user)
	} catch (err) {
		res.send(err)
	}
}

const register = async (req, res) => {
	const { username, password } = req.body

	if (await User.findOne({ username })) {
		return res.status(400).send(`Username ${username} is already taken.`)
	}

	try {
		const user = new User(req.body)

		user.hash = await bcrypt.hash(password, 10)

		await user.save()

		const token = user.generateAuthToken()

		res.header('x-auth-token', token).send('User created successfully.')
	} catch (err) {
		res.send(err)
	}
}

const update = async (req, res) => {
	try {
		const user = await User.findById(req.params.id)

		if (!user) return res.status(404).send('User not found.')

		if (
			user.username !== req.body.username &&
			(await User.findOne({ username: req.body.username }))
		) {
			res.status(404).send(`Username ${req.body.username} is already taken.`)
		}

		if (req.body.password) {
			req.body.hash = bcrypt.hash(req.body.password, 10)
		}

		Object.assign(user, req.body)

		await user.save()

		re.send('User updated successfully.')
	} catch (err) {
		res.send(err)
	}
}

const _delete = async (req, res) => {
	try {
		await User.findOneAndRemove(req.params.id)
		res.send('User deleted successfully.')
	} catch (err) {
		res.send(err)
	}
}

module.exports = {
	register,
	getAll,
	getById,
	authenticate,
	update,
	_delete,
	getCurrent,
}
