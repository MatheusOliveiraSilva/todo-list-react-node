import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FiPlus, FiEdit, FiTrash2 } from 'react-icons/fi'
import api from './../../services/api'

import {
	StyledTodoList,
	TodoListHeader,
	ButtonAction,
	ButtonGroup,
	TodoListForm,
	Content,
} from './styles'

function TodoList({ children, name, id }) {
	const [inputStatus, setInputStatus] = useState(false)

	function handleInputString() {
		setInputStatus(!inputStatus)
	}

	async function handleAddTask() {
		api.put(`/todo/rename/${id}`, { task: something })
		// how get the ID
	}

	return (
		<StyledTodoList>
			<TodoListHeader>
				<h2>{name}</h2>
				<ButtonGroup>
					<ButtonAction onClick={handleInputString}>
						<FiPlus size='1.5em' />
					</ButtonAction>

					<ButtonAction onClick={handleInputString}>
						<FiEdit size='1.5em' />
					</ButtonAction>

					<ButtonAction>
						<FiTrash2 size='1.5em' />
					</ButtonAction>
				</ButtonGroup>
			</TodoListHeader>
			<TodoListForm showInput={inputStatus ? 1 : 0}>
				<input type='text' />
				<button type='submit'></button>
				{/* TWO INPUTS */}
			</TodoListForm>
			<Content>{children}</Content>
		</StyledTodoList>
	)
}

TodoList.propTypes = {
	children: PropTypes.node,
	name: PropTypes.string.isRequired,
	id: PropTypes.string,
}

export default TodoList
