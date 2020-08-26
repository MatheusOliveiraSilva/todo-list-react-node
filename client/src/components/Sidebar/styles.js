import styled from 'styled-components'

export const StyledSidebar = styled.div`
	width: 80px;
	background-color: #333;
	position: absolute;
	left: 0;
	top: 0;
	height: 100vh;

	transform: ${props =>
		props.visibility ? 'translateX(0px)' : 'translateX(-100px)'};

	transition: transform 0.5s ease-in-out;

	& > div {
		display: flex;
		flex-direction: column;
		align-items: center;

		padding-top: 1.6em;
		box-sizing: border-box;

		button {
			cursor: pointer;
			background: transparent;
			border: none;
			outline: none;
			margin-bottom: 2.25em;

			svg {
				font-size: 2rem;
				color: #fff;

				&:hover {
					color: #ccc;
				}
			}
		}
	}
`
