import styled from 'styled-components'

export const StyledTodoItem = styled.div`
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  border-radius: 1.7em;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1em 0 1.5em;
  height: 50px;
  box-sizing: border-box;
  transition: box-shadow 0.3s;
  background-color: #fff;
  margin-bottom: 18px;

  &:hover {
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.3);
  }
`

export const Text = styled.div`
  padding: 0.7em 0;
  font-size: 1.2rem;
  flex: 1;
  font-weight: 300;

  text-decoration: ${props => (props.status ? 'line-through' : 'none')};
  color: ${props => (props.status ? '#646e78' : 'inherit')};
`
