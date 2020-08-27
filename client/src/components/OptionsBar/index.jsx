import React from 'react'
import PropTypes from 'prop-types'
import { FiEdit, FiTrash2, FiXCircle } from 'react-icons/fi'
import { StyledOptionsBar } from './styles'

function OptionsBar({ view, innerView, setInnerView, dependencies }) {
  const { handleViewTaskForm, handleDeleteTask } = dependencies

  return (
    <StyledOptionsBar view={view ? 1 : 0} innerView={innerView}>
      <div>
        <button>
          <FiEdit onClick={() => handleViewTaskForm('todo', 'rename')} />
        </button>

        <button>
          <FiTrash2 onClick={handleDeleteTask} />
        </button>
      </div>

      <div>
        <button>
          <FiXCircle onClick={() => setInnerView(false)} />
        </button>
      </div>
    </StyledOptionsBar>
  )
}

OptionsBar.propTypes = {
  view: PropTypes.bool.isRequired,
  innerView: PropTypes.bool.isRequired,
  setInnerView: PropTypes.func.isRequired,
  dependencies: PropTypes.object,
}

export default OptionsBar
