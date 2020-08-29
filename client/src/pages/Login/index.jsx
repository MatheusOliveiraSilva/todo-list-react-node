import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import api from './../../services/api'
import { login } from './../../services/auth'

import Input from '../../components/Input'
import RedirectButton from '../../components/RedirectButton'
import Button from '../../components/Button'
import ButtonX from '../../components/ButtonX'

import { StyledLogin } from './styles'

function Login(props) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  async function handleLogin(e) {
    e.preventDefault()

    try {
      const response = await api.post('user/authenticate', {
        username,
        password,
      })
      const { token } = response.data

      login(token, { username })

      props.history.push('/app')
      console.log('Logged')
    } catch (err) {
      alert(err)
    }
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

        <RedirectButton route='/' label='Forgot Password?' />

        <Button type='submit'>Login</Button>
      </form>
    </StyledLogin>
  )
}

Login.propTypes = {
  history: PropTypes.object.isRequired,
}

export default withRouter(Login)
