/* eslint-disable prettier/prettier */
import React, { useState, useEffect, useRef } from 'react'
import { FiPlus, FiChevronRight, FiLogOut } from 'react-icons/fi'

import api from './../../services/api'
import { getUser, logout } from './../../services/auth'

import TodoItem from '../../components/TodoItem'
import TodoList from '../../components/TodoList'
import Sidebar from '../../components/Sidebar'
import OptionsBar from '../../components/OptionsBar'

import {
  StyledTodo,
  Message,
  SidebarButton,
  AddButton,
  BoxWithArrow,
  UserInterface,
  TaskForm,
} from './styles'

function Todo() {
  const [lists, setLists] = useState([])
  const [user, setUser] = useState({})
  const [viewBox, setViewBox] = useState(false)
  const [newListName, setNewListName] = useState('')

  const [onChangeTarget, setOnChangeTarget] = useState({})

  const [viewTaskForm, setViewTaskForm] = useState(false)
  const [globalInputString, setGlobalInputString] = useState('')

  const [listStatus, setListStatus] = useState(false)
  const [taskStatus, setTaskStatus] = useState(false)

  const [viewSidebar, setViewSidebar] = useState(false)

  const [checkedTasks, setCheckedTasks] = useState([])

  const [innerViewOptionsBar, setInnerViewOptionsBar] = useState(true)
  const [listsOnChange, setListsOnChange] = useState([])

  const inputRef = useRef(null)

  useEffect(() => {
    api.get('/todo').then(response => {
      setLists(response.data)
      console.log(response.data)
      setUser(JSON.parse(getUser()))

      setViewTaskForm(false)
      setViewSidebar(false)

      setListStatus(false)
      setTaskStatus(false)
    })
  }, [listStatus, taskStatus])

  const toggle = (fc, variable) => fc(!variable)

  const handleViewOptionsBar = () => checkedTasks.length >= 1

  function handleViewTaskForm(target, action, id = null) {
    if (viewTaskForm === false) setGlobalInputString('')

    setViewTaskForm(!viewTaskForm)
    setOnChangeTarget({ id, target, action })
    inputRef.current.focus()
  }

  function handleLogout() {
    logout()
    window.location.reload()
  }

  async function handleAddTask() {
    const id = onChangeTarget.id

    try {
      await api.put(`/todo/add/${id}`, { task: globalInputString })
      alert('Task added')
      setTaskStatus(true)
    } catch (err) {
      alert(err)
    }
  }

  async function handleRenameList() {
    const id = onChangeTarget.id

    try {
      await api.put(`/todo/${id}`, { name: globalInputString })
      alert('List renamed')
      setListStatus(true)
    } catch (err) {
      alert(err)
    }
  }

  async function handleNewList(e) {
    e.preventDefault()

    try {
      await api.post('/todo', { name: newListName })
      setListStatus(true)
      setNewListName('')
      alert('List created with success!')
      toggle(setViewBox, viewBox)
    } catch (err) {
      alert(err)
    }
  }

  async function handleDeleteList(id) {
    try {
      await api.delete(`/todo/${id}`)
      setListStatus(true)
      alert('List deleted')
    } catch (err) {
      alert(err)
    }
  }

  async function handleRenameTask() {
    let oldName
    let newName
    let id

    if (checkedTasks.length === 1 && listsOnChange.length === 1) {
      oldName = checkedTasks[0]
      newName = globalInputString
      id = listsOnChange[0]
    } else return alert('Has more than one task checked or list on change.')

    try {
      await api.put(`/todo/rename/${id}`, { oldName, newName })
      setTaskStatus(true)
      setInnerViewOptionsBar(false)
    } catch (err) {
      alert(err)
    }
  }

  async function handleDeleteTask() {
    let id
    let tasks

    console.log(listsOnChange)

    if (listsOnChange.length === 1) {
      id = listsOnChange[0]
      tasks = checkedTasks
      console.log(listsOnChange.length, checkedTasks.length, tasks)
    }
    else return alert('Has more than one list on change.')

    setInnerViewOptionsBar(false)

    try {
      await api.put(`/todo/remove/${id}`, { tasks })
      setTaskStatus(true)
    } catch (err) {
      alert(err)
    }
  }

  function handleOnSubmitTaskForm(e) {
    e.preventDefault()

    const { target, action } = onChangeTarget

    if (target === 'list' && action === 'rename') handleRenameList()
    else if (target === 'todo' && action === 'add') handleAddTask()
    else if (target === 'todo' && action === 'rename') handleRenameTask()
  }

  return (
    <StyledTodo>
      <Sidebar view={viewSidebar} setView={setViewSidebar} />

      <header>
        <div>
          <div>
            <SidebarButton
              onClick={() => toggle(setViewSidebar, viewSidebar)}
            />
          </div>

          <UserInterface>
            <h3>Hello {user.username ? user.username : 'User'}</h3>
            <FiLogOut onClick={handleLogout} />
          </UserInterface>

          <div>
            <AddButton onClick={() => toggle(setViewBox, viewBox)}>
              <FiPlus />
              New list
            </AddButton>

            <BoxWithArrow visibility={viewBox ? 1 : 0}>
              <form onSubmit={handleNewList}>
                <input
                  type='text'
                  value={newListName}
                  onChange={e => setNewListName(e.target.value)}
                />
                <button type='submit'>
                  <FiChevronRight />
                </button>
              </form>
            </BoxWithArrow>
          </div>
        </div>

        <TaskForm
          view={viewTaskForm ? 1 : 0}
          onSubmit={handleOnSubmitTaskForm}>
          <input
            type='text'
            value={globalInputString}
            ref={inputRef}
            onChange={e => setGlobalInputString(e.target.value)}
          />
          <button>
            <FiChevronRight />
          </button>
        </TaskForm>
      </header>

      <main>
        {lists.map(list => (
          <TodoList
            key={list._id}
            id={list._id}
            name={list.name}
            dependencies={{ handleViewTaskForm, handleDeleteList }}>
            {list.tasks.length === 0
              ? <Message>Empty list</Message>

              : list.tasks.map(task => (
                <TodoItem
                  key={task}
                  label={task}
                  listId={list._id}
                  dependencies={{
                    checkedTasks,
                    setCheckedTasks,
                    setInnerViewOptionsBar,
                    setListsOnChange,
                    listsOnChange
                  }}
                />
              ))
            }
          </TodoList>
        ))}
      </main>

      <OptionsBar
        view={handleViewOptionsBar()}
        innerView={innerViewOptionsBar}
        setInnerView={setInnerViewOptionsBar}
        dependencies={{ handleViewTaskForm, handleDeleteTask }}
      />
    </StyledTodo>
  )
}

export default Todo
