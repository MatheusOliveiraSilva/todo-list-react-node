import styled from 'styled-components'

export const StyledHome = styled.div`
	padding: 0 35px;
	height: 100vh;

	header {
		display: flex;
		justify-content: flex-end;
		align-items: center;

		padding-top: 24px;
		box-sizing: border-box;
	}

	ul {
		display: flex;

		li {
			padding-right: 28px;

			a {
				cursor: pointer;
				color: #304057;
			}
		}
	}

	button {
		cursor: pointer;
		border-radius: 4px;
		border: none;
		font-weight: 500;
		background-color: #304057;
		color: #fff;
		box-sizing: border-box;
		width: 115.5px;
		height: 35px;

		&:hover {
			background-color: transparent;
			border: 1px solid #304057;
			color: #304057;
		}
	}
`
// color --> #7C7C7C
