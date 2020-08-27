import React from 'react'
import PropTypes from 'prop-types'

import {
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
  CheckIcon,
} from './styles'

function Checkbox({ className, checked, ...props }) {
  return (
    <CheckboxContainer className={className}>
      <HiddenCheckbox checked={checked} {...props} />
      <StyledCheckbox checked={checked}>
        <CheckIcon />
      </StyledCheckbox>
    </CheckboxContainer>
  )
}

Checkbox.propTypes = {
  className: PropTypes.string,
  checked: PropTypes.bool.isRequired,
}

export default Checkbox
