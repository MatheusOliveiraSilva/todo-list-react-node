import styled from 'styled-components'
import bg from './../../assets/todo_list.svg'

import { Link } from 'react-router-dom'

export const StyledHome = styled.div`
	padding: 0 35px;
	width: 100%;
	height: 100vh;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	background: url(${bg}) no-repeat 52vw;
	background-size: 600px;

	main {
		flex: 1;
		width: 50%;
		color: #222222;
		padding-top: 2em;

		h1 {
			font-size: 3.2rem;
			font-weight: 500;
		}

		p {
			font-size: 1.7rem;
			margin-bottom: 2.5em;
		}

		button {
			width: 65%;
			height: 55px;
			display: flex;
			align-items: center;
			background-color: #6696d8;
			border: none;
			color: #fff;
			border-radius: 8px 25px;

			transition: background-color 3s;

			&:hover {
				background-color: #266eb1;

				a {
					background-color: #2364a0;

					svg {
						font-size: 1.9rem;
					}
				}
			}

			strong {
				font-family: Arial;
				flex: 1;
				font-size: 1rem;
			}

			a {
				width: 55px;
				height: 100%;
				background-color: #5c8ed3;
				border-bottom-right-radius: 8px;
				border-top-right-radius: 25px;

				display: flex;
				align-items: center;
				justify-content: center;

				transition: 3s;
				cursor: pointer;
				color: #fff;
			}
		}
	}
`
// color --> #7C7C7C
// color -->
