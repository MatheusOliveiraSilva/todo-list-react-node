import React, { useState, useEffect } from 'react'
import { FiPlus, FiChevronRight, FiLogOut } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import api from './../../services/api'
import { getUser, logout } from './../../services/auth'

import TodoItem from '../../components/TodoItem'
import TodoList from '../../components/TodoList'

import {
	StyledTodo,
	Message,
	BackButton,
	AddButton,
	BoxWithArrow,
	UserInterface,
	TaskForm,
} from './styles'

function Todo() {
	const [lists, setLists] = useState([])
	const [user, setUser] = useState({})
	const [viewBox, setViewBox] = useState(false)
	const [newListName, setNewListName] = useState('')

	const [onChangeTarget, setOnChangeTarget] = useState({})

	const [viewTaskForm, setViewTaskForm] = useState(false)
	const [globalInputString, setGlobalInputString] = useState('')

	const [listStatus, setListStatus] = useState(false)
	const [taskStatus, setTaskStatus] = useState(false)

	useEffect(() => {
		api.get('/todo').then(response => {
			setLists(response.data)
			console.log(response.data)
			setUser(JSON.parse(getUser()))

			setViewTaskForm(false)

			setListStatus(false)
			setTaskStatus(false)
		})
	}, [listStatus, taskStatus])

	function handleViewBox() {
		setViewBox(!viewBox)
	}

	function handleViewTaskForm(id, target) {
		if (viewTaskForm === false) setGlobalInputString('')

		setViewTaskForm(!viewTaskForm)
		setOnChangeTarget({ id, target })
	}

	function handleLogout() {
		logout()
		window.location.reload()
	}

	async function handleAddTask(e) {
		e.preventDefault()

		const id = onChangeTarget.id

		try {
			await api.put(`/todo/add/${id}`, { task: globalInputString })
			alert('Task added')
			setTaskStatus(true)
		} catch (err) {
			alert(err)
		}
	}

	async function handleRenameList(e) {
		e.preventDefault()

		const id = onChangeTarget.id

		try {
			await api.put(`/todo/${id}`, { name: globalInputString })
			alert('List renamed')
			setListStatus(true)
		} catch (err) {
			alert(err)
		}
	}

	async function handleNewList(e) {
		e.preventDefault()

		try {
			await api.post('/todo', { name: newListName })
			setListStatus(true)
			setNewListName('')
			alert('List created with success!')
			handleViewBox()
		} catch (err) {
			alert(err)
		}
	}

	async function handleDeleteList(id) {
		try {
			await api.delete(`/todo/${id}`)
			setListStatus(true)
			alert('List deleted')
		} catch (err) {
			alert(err)
		}
	}

	return (
		<StyledTodo>
			<header>
				<div>
					<div>
						<Link to='/'>
							<BackButton strokeWidth='1.5px' />
						</Link>
					</div>

					<UserInterface>
						<h3>Hello {user.username ? user.username : 'User'}</h3>
						<FiLogOut onClick={handleLogout} />
					</UserInterface>

					<div>
						<AddButton onClick={handleViewBox}>
							<FiPlus size='1.3em' strokeWidth='2.5px' />
							New list
						</AddButton>

						<BoxWithArrow visibility={viewBox ? 1 : 0}>
							<form onSubmit={handleNewList}>
								<input
									type='text'
									value={newListName}
									onChange={e => setNewListName(e.target.value)}
								/>
								<button type='submit'>
									<FiChevronRight size='1.75em' />
								</button>
							</form>
						</BoxWithArrow>
					</div>
				</div>

				<TaskForm
					view={viewTaskForm ? 1 : 0}
					onSubmit={
						onChangeTarget.target === 'todo' ? handleAddTask : handleRenameList
					}>
					<input
						type='text'
						value={globalInputString}
						onChange={e => setGlobalInputString(e.target.value)}
					/>
					<button>
						<FiChevronRight />
					</button>
				</TaskForm>
			</header>

			<main>
				{lists.map(list => (
					<TodoList
						key={list._id}
						id={list._id}
						name={list.name}
						handlers={{ handleViewTaskForm, handleDeleteList }}>
						{list.tasks.length === 0 ? (
							<Message>Empty list</Message>
						) : (
								list.tasks.map(task => <TodoItem key={task} label={task} />)
							)}
					</TodoList>
				))}
			</main>
		</StyledTodo>
	)
}

export default Todo
