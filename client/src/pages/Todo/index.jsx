import React from 'react'

import TodoItem from '../../components/TodoItem'

import { StyledTodo } from './styles'

function Todo() {
	return (
		<StyledTodo>
			<header>Hello User</header>

			<main>
				<TodoItem label='Wash the dishes' />
			</main>
		</StyledTodo>
	)
}

export default Todo
