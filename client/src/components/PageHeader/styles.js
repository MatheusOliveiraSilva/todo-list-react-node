import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const CreateAccountButton = styled(Link)`
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	border-radius: 4px;
	border: none;
	font-weight: 500;
	background-color: #6696d8;
	color: #fff;
	box-sizing: border-box;
	width: 115.5px;
	height: 35px;
	font-size: 13.5px;

	transition: background-color 0.3s;

	&:hover {
		background-color: #1c5d99;
		color: #fff;
	}
`

export const StyledHeader = styled.header`
	display: flex;
	justify-content: flex-end;
	align-items: center;

	padding-top: 24px;
	box-sizing: border-box;

	ul {
		display: flex;

		li {
			padding-right: 30px;

			a {
				cursor: pointer;
				color: #222222;
			}
		}
	}
`
