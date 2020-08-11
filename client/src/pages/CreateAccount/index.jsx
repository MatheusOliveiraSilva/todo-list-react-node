import React from 'react'

import Input from '../../components/Input'
import Redirect from '../../components/Redirect/index.jsx'
import Button from '../../components/Button/index.jsx'
import ButtonX from '../../components/ButtonX/index.jsx'

import { StyledCreateAccount, DoubleInputBlock } from './styles.js'

function CreateAccount() {
	return (
		<StyledCreateAccount>
			<form>
				<ButtonX route='/' />

				<fieldset>
					<legend>Create a Account</legend>

					<DoubleInputBlock>
						<Input label='First Name' name='first-name' />
						<Input label='Last Name' name='last-name' />
					</DoubleInputBlock>

					<Input label='Username' name='username' autoComplete='no' />

					<Input label='Password' name='password' type='password' />
				</fieldset>

				<Redirect route='/login' label='Already has a account? Log in' />

				<Button type='submit'>Create a Account</Button>
			</form>
		</StyledCreateAccount>
	)
}

export default CreateAccount
