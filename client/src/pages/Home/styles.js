import styled from 'styled-components'

export const StyledHome = styled.div`
	padding: 0 35px;
	width: 100%;
	height: 100vh;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;

	header {
		display: flex;
		justify-content: flex-end;
		align-items: center;

		padding-top: 24px;
		box-sizing: border-box;

		button {
			cursor: pointer;
			border-radius: 4px;
			border: none;
			font-weight: 500;
			background-color: #1c5d99;
			color: #fff;
			box-sizing: border-box;
			width: 115.5px;
			height: 35px;

			&:hover {
				background-color: transparent;
				border: 1px solid #1c5d99;
				color: #1c5d99;
			}
		}
	}

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

			transition: 3s;

			&:hover {
				background-color: #266eb1;

				a {
					background-color: #2364a0;
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
