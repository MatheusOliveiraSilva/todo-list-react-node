import React from 'react'
import PropTypes from 'prop-types'

import { StyledInput } from './styles.js'

function Input({ label, name, type, ...rest }) {
  return (
    <StyledInput>
      <label htmlFor={name}>{label}</label>
      <input type={type} id={name} {...rest} />
    </StyledInput>
  )
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
}

Input.defaultProps = {
  type: 'text',
}

export default Input
