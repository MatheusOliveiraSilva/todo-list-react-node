import React from 'react'
import { Link } from 'react-router-dom'

import { StyledHome } from './styles'

function Home() {
	return (
		<StyledHome>
			<header>
				<nav>
					<ul>
						<li>
							<a href=''>Hello!</a>
						</li>
						<li>
							<a href=''>Log in</a>
						</li>
					</ul>
				</nav>

				<button>Create Account</button>
			</header>
		</StyledHome>
	)
}

export default Home
