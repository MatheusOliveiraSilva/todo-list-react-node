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
} from './styles'

function Todo() {
	const [lists, setLists] = useState([])
	const [user, setUser] = useState({})
	const [viewBox, setViewBox] = useState(false)
	const [listName, setListName] = useState('')
	const [listCreated, setListCreated] = useState(false)

	function handleViewBox() {
		setViewBox(!viewBox)
	}

	function handleLogout() {
		logout()
		window.location.reload()
	}

	useEffect(() => {
		api.get('/todo').then(response => {
			setLists(response.data)
			console.log(response.data)
			setUser(JSON.parse(getUser()))
		})
	}, [listCreated])

	async function handleNewList(e) {
		e.preventDefault()

		try {
			await api.post('/todo', { name: listName })
			setListCreated(true)
			setListName('')
			alert('List created with success!')
			handleViewBox()
		} catch (err) {
			alert(err)
		}
	}

	return (
		<StyledTodo>
			<header>
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
								value={listName}
								onChange={e => setListName(e.target.value)}
							/>
							<button type='submit'>
								<FiChevronRight size='1.75em' />
							</button>
						</form>
					</BoxWithArrow>
				</div>
			</header>

			<main>
				{lists.map(list => (
					<TodoList key={list._id} id={list._id} name={list.name}>
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
