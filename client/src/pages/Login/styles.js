import styled from 'styled-components'

export const XButton = styled.div`
	position: absolute;
	right: 15px;
	cursor: pointer;
`

export const ForgotPassword = styled.button`
	background-color: #fff;
	margin-bottom: 18px;
`

export const LoginButton = styled.button`
	background-color: #1f92ee;
	color: #fff;
	height: 36px;
	cursor: pointer;
`

export const StyledLogin = styled.div`
	width: 100%;
	height: 100vh;
	background-color: #fbfbfb;
	display: flex;
	align-items: center;
	justify-content: center;

	form {
		width: 400px;
		height: 75%;
		box-shadow: 2px 2px 15px #ccc;
		background-color: #fff;
		border-radius: 7px;
		padding: 1em 1.6em;
		box-sizing: border-box;
		position: relative;
	}

	fieldset {
		margin-top: 40px;
		margin-bottom: 30px;
		border: 0;
		padding: 0;

		legend {
			width: 100%;
			text-align: center;
			font-weight: 300;
			font-size: 1.5rem;
			margin-bottom: 1.8em;
		}

		div {
			display: flex;
			flex-direction: column;
			margin-bottom: 20px;

			label {
				margin-bottom: 7px;
				font-size: 0.9rem;
			}

			input {
				height: 36px;
			}
		}
	}

	button {
		width: 100%;
		font-weight: 500;
		border: none;
	}
`
