import React from 'react'
import PropTypes from 'prop-types'

import { StyledLink } from './styles'

function Redirect({ route, label }) {
	return <StyledLink to={route}>{label}</StyledLink>
}

Redirect.propTypes = {
	route: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
}

export default Redirect
