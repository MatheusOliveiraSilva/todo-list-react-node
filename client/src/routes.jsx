import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import CreateAccount from './pages/CreateAccount'
import Hello from './pages/Hello'
import Todo from './pages/Todo'

function Routes() {
	return (
		<BrowserRouter>
			<Route component={Home} path='/' exact />
			<Route component={Login} path='/login' />
			<Route component={CreateAccount} path='/create-account' />
			<Route component={Hello} path='/hello' />
			<Route component={Todo} path='/todos' />
		</BrowserRouter>
	)
}

export default Routes
