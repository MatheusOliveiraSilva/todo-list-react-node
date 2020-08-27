import React from 'react'
import PropTypes from 'prop-types'

import { StyledLink } from './styles'

function RedirectButton({ route, label }) {
  return <StyledLink to={route}>{label}</StyledLink>
}

RedirectButton.propTypes = {
  route: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

export default RedirectButton
