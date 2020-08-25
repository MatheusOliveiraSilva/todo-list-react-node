import React from 'react'
import PropTypes from 'prop-types'
import { FiPlus, FiEdit, FiTrash2 } from 'react-icons/fi'

import {
	StyledTodoList,
	TodoListHeader,
	ButtonAction,
	ButtonGroup,
	Content,
} from './styles'

function TodoList({ children, name, id, handlers }) {
	const { handleViewTaskForm, handleDeleteList } = handlers

	return (
		<StyledTodoList>
			<TodoListHeader>
				<h2>{name}</h2>
				<ButtonGroup>
					<ButtonAction>
						<FiPlus
							size='1.5em'
							onClick={() => handleViewTaskForm(id, 'todo')}
						/>
					</ButtonAction>

					<ButtonAction>
						<FiEdit
							size='1.5em'
							onClick={() => handleViewTaskForm(id, 'list')}
						/>
					</ButtonAction>

					<ButtonAction>
						<FiTrash2 size='1.5em' onClick={() => handleDeleteList(id)} />
					</ButtonAction>
				</ButtonGroup>
			</TodoListHeader>
			<Content>{children}</Content>
		</StyledTodoList>
	)
}

TodoList.propTypes = {
	children: PropTypes.node,
	name: PropTypes.string.isRequired,
	id: PropTypes.string,
	handlers: PropTypes.object,
}

export default TodoList
