import React from 'react'
import PropTypes from 'prop-types'

import { StyledTodoList } from './styles'

function TodoList({ children, name }) {
	return (
		<StyledTodoList>
			<h2>{name}</h2>
			<div>{children}</div>
		</StyledTodoList>
	)
}

TodoList.propTypes = {
	children: PropTypes.node,
	name: PropTypes.string.isRequired,
}

export default TodoList
