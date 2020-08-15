import React, { useState, useEffect } from 'react'
import api from './../../services/api'

import TodoItem from '../../components/TodoItem'
import TodoList from '../../components/TodoList'

import { StyledTodo } from './styles'

function Todo() {
	const [lists, setLists] = useState([])

	useEffect(() => {
		api.get('/todo').then(response => console.log(response))
	}, [])

	return (
		<StyledTodo>
			<header>Hello User</header>

			<main>
				<TodoList>
					<TodoItem label='Wash the dishes' />
				</TodoList>
			</main>
		</StyledTodo>
	)
}

export default Todo
