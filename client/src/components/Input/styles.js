import styled from 'styled-components'

export const StyledInput = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 20px;

	label {
		margin-bottom: 7px;
		font-size: 0.9rem;
		color: rgba(0, 0, 0, 0.7);
	}

	input {
		height: 43px;
		border: none;
		outline: none;
		background-color: #f3f3f3;
		box-shadow: inset 0 2px 3px rgba(0, 0, 0, 0.2);
		box-sizing: border-box;
		border-width: 0;
		transition: border-width 0.4s;
		padding: 0 6px;
		border-radius: 3px;
		color: rgba(0, 0, 0, 0.8);

		&:focus {
			border-width: 3px;
			border-bottom: solid #1f92ee;
		}
	}
`
