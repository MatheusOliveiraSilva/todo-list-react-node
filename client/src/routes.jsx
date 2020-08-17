/* eslint-disable prettier/prettier */
import React from 'react'
import PropTypes from 'prop-types'
import { Route, BrowserRouter, Redirect, Switch } from 'react-router-dom'

import { isAuthenticated } from './services/auth'

import Home from './pages/Home'
import Login from './pages/Login'
import CreateAccount from './pages/CreateAccount'
import Hello from './pages/Hello'
import Todo from './pages/Todo'

const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={props =>
			isAuthenticated() ? (
				<Component {...props} />
			) : (
					<Redirect to={{ pathname: '/', state: { from: props.location } }} />
				)
		}
	/>
)

function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route component={Home} path='/' exact />
				<Route component={Login} path='/login' />
				<Route component={CreateAccount} path='/create-account' />
				<Route component={Hello} path='/hello' />
				<PrivateRoute component={Todo} path='/app' />
			</Switch>
		</BrowserRouter>
	)
}

PrivateRoute.propTypes = {
	component: PropTypes.element.isRequired,
	location: PropTypes.object.isRequired,
}

export default Routes
