/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
import { FiPlus } from 'react-icons/fi'
import api from './../../services/api'
import { Link } from 'react-router-dom'

import TodoItem from '../../components/TodoItem'
import TodoList from '../../components/TodoList'

import { StyledTodo, Message, BackButton } from './styles'

import { getUser } from './../../services/auth'
import Button from '../../components/Button'

function Todo() {
	const [lists, setLists] = useState([])
	const [user, setUser] = useState({})

	useEffect(() => {
		api.get('/todo').then(response => {
			setLists(response.data)
			console.log(response.data)
			setUser(JSON.parse(getUser()))
		})
	}, [])

	async function handleNewList() {
		// dropdown with input in

		try {
			await api.post('/todo', { name })
		} catch (err) {
			alert(err)
		}

	}

	return (
		<StyledTodo>
			<header>
				<Link to='/'>
					<BackButton strokeWidth='1.5px' />
				</Link>

				<div>
					Hello {user.username ? user.username : 'User'}
				</div>

				<div>
					<Button>
						<FiPlus size='1.3em' strokeWidth='2.5px' />
						New list
					</Button>
				</div>
			</header>

			<main>
				{lists.map(list => (
					<TodoList key={list._id} name={list.name}>
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
