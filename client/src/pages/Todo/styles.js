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

export const BoxWithArrow = styled.div`
	display: ${props => (props.visibility ? 'block' : 'none !important')};
	background-color: #fff;
	box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.2);
	position: absolute;
	top: 80px;
	width: 255px;
	height: 70px;
	box-sizing: border-box;
	border-radius: 5px;

	form {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	input {
		border: 1px solid #ccc;
		outline: none;
		height: 28px;
		width: 75%;
		border-radius: 2px;
		padding: 0 5px;
		box-sizing: border-box;
		font-size: 0.9rem;

		transition: border-color 0.3s;

		&:focus {
			border-color: #333;
		}
	}

	button {
		width: 28px;
		height: 28px;
		border: none;
		background-color: #1f92ee;
		margin-left: 11px;
		border-radius: 3px;

		display: flex;
		justify-content: center;
		align-items: center;

		cursor: pointer;

		outline: none;

		svg {
			color: #fff;
			stroke-width: 2px;
			transition: color 0.3s;

			&:hover {
				color: #bbcde5;
			}
		}
	}
`

export const AddButton = styled.button`
	background-color: #1f92ee;
	color: #fff;
	height: 36px;
	cursor: pointer;
	width: 125px;
	font-weight: 500;
	border: none;
	border-radius: 3px;
	font-size: 0.9rem;
	transition: background-color 0.3s;
	display: flex;
	align-items: center;
	justify-content: center;
	outline: none;

	&:hover {
		background-color: #1c5d99;
	}

	svg {
		margin-right: 5px;
	}
`

export const Message = styled.div`
	color: #646e78;
	font-style: italic;
`

export const StyledTodo = styled.div`
	width: 100%;
	background-color: #f3f3f3;

	header {
		box-sizing: border-box;
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
		}
	}

	main {
		width: 55%;
		margin: 3em auto 0;

		color: #293132;
	}
`
