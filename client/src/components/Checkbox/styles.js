import styled from 'styled-components'
import { FiCheck } from 'react-icons/fi'

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 0;
`

export const CheckIcon = styled(FiCheck)`
  fill: none;
  stroke: white;
  stroke-width: 2px;
  font-size: 1.4rem;
`

export const StyledCheckbox = styled.div`
  display: flex;
  width: 32px;
  height: 32px;
  background: ${props => (props.checked ? '#65D575' : '#fff')};
  border-radius: 50%;
  transition: all 150ms;
  box-shadow: 1.5px 1.5px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;

  align-items: center;
  justify-content: center;

  ${CheckIcon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')};
  }
`

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`
