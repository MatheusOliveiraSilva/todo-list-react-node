import React from 'react'
import PropTypes from 'prop-types'

function TodoList({ children }) {
	return <div>{children}</div>
}

TodoList.propTypes = {
	children: PropTypes.node,
}

export default TodoList
