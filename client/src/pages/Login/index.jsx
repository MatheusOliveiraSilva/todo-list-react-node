import React from 'react'
import { Link } from 'react-router-dom'

import Input from '../../components/Input'
import Redirect from '../../components/Redirect'
import Button from '../../components/Button'
import ButtonX from '../../components/ButtonX'

import { StyledLogin, LoginButton, XButton } from './styles'

function Login() {
	return (
		<StyledLogin>
			<form>
				<ButtonX route='/' />

				<fieldset>
					<legend>Login to Continue</legend>

					<Input label='Username' name='username' autoComplete='no' autoFocus />
					<Input label='Password' name='password' type='password' />
				</fieldset>

				<Redirect route='/' label='Forgot Password?' />

				<Button type='submit'>Login</Button>
			</form>
		</StyledLogin>
	)
}

export default Login
