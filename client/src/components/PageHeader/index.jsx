import React from 'react'
import { Link } from 'react-router-dom'

import { CreateAccountButton, StyledHeader } from './styles'

function PageHeader() {
  return (
    <StyledHeader>
      <nav>
        <ul>
          <li>
            <Link to='/hello'>Hello!</Link>
          </li>
          <li>
            <Link to='/login'>Log in</Link>
          </li>
        </ul>
      </nav>

      <CreateAccountButton to='/create-account'>
        Create Account
      </CreateAccountButton>
    </StyledHeader>
  )
}

export default PageHeader
