import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { StyledTodoItem, Text } from './styles'
import Checkbox from '../Checkbox'

function TodoItem({ label, dependencies, ...rest }) {
	const [checked, setChecked] = useState(false)

	const { setCheckedTasks, checkedTasks, setInnerViewOptionsBar } = dependencies

	function handleCheckBoxChange(event) {
		if (!event.target.checked) setCheckedTasks(checkedTasks - 1)

		setChecked(event.target.checked)

		if (event.target.checked) {
			setCheckedTasks(checkedTasks + 1)
			setInnerViewOptionsBar(true)
		}
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
	dependencies: PropTypes.object,
}

export default TodoItem
