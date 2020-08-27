import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import api from './../../services/api'

import Input from '../../components/Input'
import RedirectButton from '../../components/RedirectButton/index.jsx'
import Button from '../../components/Button/index.jsx'
import ButtonX from '../../components/ButtonX/index.jsx'

import { StyledCreateAccount, DoubleInputBlock } from './styles.js'

function CreateAccount(props) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  async function handleCreateAccount(e) {
    e.preventDefault()

    try {
      await api.post('user/register', {
        username,
        password,
      })

      props.history.push('/')
    } catch (err) {
      alert(err)
    }
  }

  return (
    <StyledCreateAccount>
      <form onSubmit={handleCreateAccount}>
        <ButtonX route='/' />

        <fieldset>
          <legend>Create a Account</legend>

          <DoubleInputBlock>
            <Input
              label='First Name'
              name='first-name'
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
            <Input
              label='Last Name'
              name='last-name'
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
          </DoubleInputBlock>

          <Input
            label='Username'
            name='username'
            autoComplete='no'
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

        <RedirectButton route='/login' label='Already has a account? Log in' />

        <Button type='submit'>Create a Account</Button>
      </form>
    </StyledCreateAccount>
  )
}

CreateAccount.propTypes = {
  history: PropTypes.object.isRequired,
}

export default withRouter(CreateAccount)
