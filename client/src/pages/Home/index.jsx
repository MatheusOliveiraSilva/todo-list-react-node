import React from 'react'
import { FiArrowRight } from 'react-icons/fi'

import PageHeader from '../../components/PageHeader'

import { StyledHome } from './styles'

export const sourceProject =
	'https://github.com/MatheusOliveiraSilva/todo-list-react-node'

function Home() {
	return (
		<StyledHome>
			<PageHeader />

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
