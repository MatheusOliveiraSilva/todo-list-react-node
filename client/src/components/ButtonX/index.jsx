import React from 'react'
import { FiX } from 'react-icons/fi'
import PropTypes from 'prop-types'

import { StyledButtonX } from './styles'

function ButtonX({ route }) {
	return (
		<StyledButtonX to={route}>
			<FiX />
		</StyledButtonX>
	)
}

ButtonX.propTypes = {
	route: PropTypes.string.isRequired,
}

export default ButtonX
