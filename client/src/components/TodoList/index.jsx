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

function TodoList({ children, name, id, dependencies }) {
  const { handleViewTaskForm, handleDeleteList } = dependencies

  return (
    <StyledTodoList>
      <TodoListHeader>
        <h2>{name}</h2>
        <ButtonGroup>
          <ButtonAction>
            <FiPlus onClick={() => handleViewTaskForm('todo', 'add', id)} />
          </ButtonAction>

          <ButtonAction>
            <FiEdit onClick={() => handleViewTaskForm('list', 'rename', id)} />
          </ButtonAction>

          <ButtonAction>
            <FiTrash2 onClick={() => handleDeleteList(id)} />
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
  dependencies: PropTypes.object,
}

export default TodoList
