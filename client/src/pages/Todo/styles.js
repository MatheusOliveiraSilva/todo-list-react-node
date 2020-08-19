import styled from 'styled-components'

import { FiArrowLeft } from 'react-icons/fi'

export const BackButton = styled(FiArrowLeft)`
	cursor: pointer;
	color: #4f5165;
	transition: color 0.3s;

	&:hover {
		/* color: #646e78; */
		color: #aea3b0;
	}
`

export const Message = styled.div`
	color: #646e78;
	font-style: italic;
`

export const StyledTodo = styled.div`
	width: 100vw;
	height: 100vh;

	header {
		font-size: 2rem;
		padding: 0.8em 1em;
		text-align: center;
		font-weight: 300;
		display: grid;
		grid-template-rows: auto;
		grid-template-columns: 1fr 3fr 1fr;

		a {
			display: flex;
			justify-content: flex-start;
			align-items: center;
		}

		div:nth-child(2) {
			display: flex;
			justify-content: center;
			align-items: center;
		}

		div:last-child {
			display: flex;
			justify-content: flex-end;
			align-items: center;

			button {
				width: 125px;
				background-color: #1f92ee;
				color: #fff;
				display: flex;
				align-items: center;
				justify-content: center;

				&:hover {
					background-color: #1c5d99;
				}

				svg {
					margin-right: 5px;
				}
			}
		}
	}

	main {
		width: 55%;
		margin: 1em auto;

		color: #293132;
	}
`
