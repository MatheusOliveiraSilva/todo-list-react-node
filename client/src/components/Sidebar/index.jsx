import React from 'react'
import PropTypes from 'prop-types'

import { FiX, FiUser, FiSettings } from 'react-icons/fi'

import { StyledSidebar } from './styles'

function Sidebar({ view, setView }) {
	return (
		<StyledSidebar visibility={view ? 1 : 0}>
			<div>
				<button onClick={() => setView(!view)}>
					<FiX />
				</button>

				<button>
					<FiUser />
				</button>

				<button>
					<FiSettings />
				</button>
			</div>
		</StyledSidebar>
	)
}

Sidebar.propTypes = {
	view: PropTypes.bool.isRequired,
	setView: PropTypes.func,
}

export default Sidebar
