import React from 'react'
import { FiArrowLeft } from 'react-icons/fi'

import { sourceProject } from './../../pages/Home'

import { StyledHello, BackButton } from './styles'

function Hello() {
  return (
    <StyledHello>
      <h1>Hello!</h1>
      <p>
        This is just a apresentation route. Access
        <a href={sourceProject} target='_blank' rel='noreferrer'>
          {' '}
          the project in github.
        </a>
      </p>

      <BackButton to='/'>
        <FiArrowLeft /> <span>Back</span>
      </BackButton>
    </StyledHello>
  )
}

export default Hello
