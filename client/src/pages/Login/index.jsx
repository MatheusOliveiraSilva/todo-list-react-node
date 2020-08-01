import React from 'react'
import { Link } from 'react-router-dom'
import { FiX } from 'react-icons/fi'

import { StyledLogin, ForgotPassword, LoginButton, XButton } from './styles'

function Login() {
	return (
		<StyledLogin>
			<form>
				<Link to='/'>
					<XButton>
						<FiX size='1.5em' />
					</XButton>
				</Link>

				<fieldset>
					<legend>Login to Continue</legend>

					<div>
						<label htmlFor='username'>Username</label>
						<input type='text' name='' id='username' />
					</div>
					<div>
						<label htmlFor='password'>Password</label>
						<input type='password' name='' id='password' />
					</div>
				</fieldset>
				<ForgotPassword>
					<Link to='/' style={{ color: '#1f92ee' }}>
						Forgot Password?
					</Link>
				</ForgotPassword>
				<LoginButton type='submit'>Login</LoginButton>
			</form>
		</StyledLogin>
	)
}

export default Login
