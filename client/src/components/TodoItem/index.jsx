import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { StyledTodoItem, Text } from './styles'
import Checkbox from '../Checkbox'

function TodoItem({ label, ...rest }) {
	const [checked, setChecked] = useState(false)

	function handleCheckBoxChange(event) {
		setChecked(event.target.checked)
	}

	return (
		<StyledTodoItem>
			<Text status={checked}>{label}</Text>

			<label>
				<Checkbox checked={checked} onChange={handleCheckBoxChange} {...rest} />
			</label>
		</StyledTodoItem>
	)
}

TodoItem.propTypes = {
	label: PropTypes.string.isRequired,
}

export default TodoItem
