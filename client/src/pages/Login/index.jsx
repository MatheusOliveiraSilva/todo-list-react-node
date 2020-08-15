import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import api from './../../services/api'

import Input from '../../components/Input'
import Redirect from '../../components/Redirect'
import Button from '../../components/Button'
import ButtonX from '../../components/ButtonX'

import { StyledLogin } from './styles'

function Login() {
	// ursobear
	// --> authorization routes react
	const history = useHistory()

	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	function handleLogin(e) {
		e.preventDefault()

		api
			.post('user/authenticate', {
				username,
				password,
			})
			.then(() => {
				history.push('/todos')
			})
			.catch(() => {
				alert('Something was wrong!')
			})
	}

	return (
		<StyledLogin>
			<form onSubmit={handleLogin}>
				<ButtonX route='/' />

				<fieldset>
					<legend>Login to Continue</legend>

					<Input
						label='Username'
						name='username'
						autoComplete='no'
						autoFocus
						value={username}
						onChange={e => setUsername(e.target.value)}
					/>
					<Input
						label='Password'
						name='password'
						type='password'
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>
				</fieldset>

				<Redirect route='/' label='Forgot Password?' />

				<Button type='submit'>Login</Button>
			</form>
		</StyledLogin>
	)
}

export default Login
