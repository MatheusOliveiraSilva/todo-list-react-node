import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { StyledTodoItem, Text } from './styles'
import Checkbox from '../Checkbox'

function TodoItem({ label, listId, dependencies, ...rest }) {
  const [checked, setChecked] = useState(false)

  const {
    setCheckedTasks,
    checkedTasks,
    setInnerViewOptionsBar,
    setListsOnChange,
    listsOnChange,
  } = dependencies

  function handleCheckBoxChange(event) {
    if (!event.target.checked) {
      setCheckedTasks(checkedTasks.filter(task => task !== label))
      setListsOnChange(listsOnChange.filter(id => id !== listId))
    }

    setChecked(event.target.checked)

    if (event.target.checked) {
      setCheckedTasks([...checkedTasks, label])
      setInnerViewOptionsBar(true)

      if (!listsOnChange.includes(listId))
        setListsOnChange([...listsOnChange, listId])
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
  listId: PropTypes.string,
  dependencies: PropTypes.object,
}

export default TodoItem
