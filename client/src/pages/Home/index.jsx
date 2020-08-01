import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'

import { StyledHome } from './styles'

function Home() {
	const sourceProject =
		'https://github.com/MatheusOliveiraSilva/todo-list-react-node'

	return (
		<StyledHome>
			<header>
				<nav>
					<ul>
						<li>
							<a href=''>Hello!</a>
						</li>
						<li>
							<Link to='/login'>Log in</Link>
						</li>
					</ul>
				</nav>

				<button>Create Account</button>
			</header>

			<main>
				<h1>Todo list App</h1>
				<p>An app that creates list of todos to help yours daily needs.</p>
				<button>
					<strong>Know more about the project</strong>
					<a href={sourceProject} target='_blank' rel='noreferrer'>
						<FiArrowRight size='1.9em' />
					</a>
				</button>
			</main>
		</StyledHome>
	)
}

export default Home
