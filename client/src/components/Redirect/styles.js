import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledLink = styled(Link)`
	display: inline-block;
	background-color: #fff;
	margin-bottom: 18px;
	color: #1f92ee;
	font-size: 13.33333px;
	font-weight: 500;
	text-align: center;
	font-size: 0.9rem;

	transition: color 0.2s;

	&:hover {
		color: #1c5d99;
	}
`
