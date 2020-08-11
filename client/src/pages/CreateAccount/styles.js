import styled from 'styled-components'

export const DoubleInputBlock = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 1.5em;

	div:first-child {
		margin-right: 1em;
	}

	div {
		margin-bottom: 0;
		width: 100%;
	}
`

export const StyledCreateAccount = styled.div`
	width: 100vw;
	height: 100vh;

	display: flex;
	align-items: center;
	justify-content: center;

	legend {
		font-size: 1.5rem;
	}

	form {
		width: 34%;
		box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.25);
		background-color: #fff;
		border-radius: 7px;
		padding: 1em 1.6em 3.7em;
		box-sizing: border-box;
		position: relative;

		display: flex;
		flex-direction: column;
		align-items: center;

		fieldset {
			margin-top: 40px;
			margin-bottom: 30px;
			padding: 0;
			width: 100%;

			legend {
				text-align: center;
				margin-bottom: 1.8em;
				width: 100%;
				font-weight: 300;
				font-size: 1.5rem;
			}
		}
	}
`
