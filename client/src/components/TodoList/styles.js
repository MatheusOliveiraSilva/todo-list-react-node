import styled from 'styled-components'

export const TodoListHeader = styled.div`
	display: flex;
	align-items: center;
`

export const ButtonAction = styled.button`
	background: none;
	border: none;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	outline: 0;

	svg {
		stroke-width: 2px;
		color: #4f5165;
		font-size: 1.5rem;

		&:hover {
			color: #aea3b0;
		}
	}
`

export const ButtonGroup = styled.div`
	display: none;

	button {
		margin-right: 15px;

		&:last-child {
			margin-right: 0;
		}
	}
`

export const Content = styled.div`
	margin-top: 0.8em;
`

export const StyledTodoList = styled.div`
	h2 {
		font-weight: 300;
		margin-right: 0.9em;
		margin-top: 0;
		margin-bottom: 0;
	}

	padding-bottom: 3em;

	&:hover {
		${ButtonGroup} {
			display: flex;
		}
	}
`

export const TodoListForm = styled.form`
	height: ${props => (props.showInput ? '45px' : '0')};
	display: flex;
	align-items: center;
	overflow: hidden;
	transition: height 0.3s;

	input {
		outline: 0;
		width: 200px;
		height: 19px;
		font-size: 0.9rem;
		font-family: 'Ubuntu', sans-serif;
	}
`
