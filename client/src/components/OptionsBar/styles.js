import styled from 'styled-components'

export const StyledOptionsBar = styled.div`
  border-radius: 8px 8px 0px 0px;
  height: 55px;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0px -1px 8px rgba(0, 0, 0, 0.4);
  background-color: #fff;
  display: ${props => (props.view && props.innerView ? 'flex' : 'none')};

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    button {
      background: transparent;
      border: none;
      margin-right: 3em;
      cursor: pointer;
      outline: 0;

      svg {
        stroke-width: 1.5px;
        color: #333;
        transition: color 0.3s;
        font-size: 2rem;
      }
    }
  }

  & > div:first-child {
    flex: 1;

    button:first-child {
      svg:hover {
        color: #4f86c6;
      }
    }

    button:last-child {
      svg:hover {
        color: #ee4266;
      }
    }
  }

  & > div:last-child {
    width: 10%;

    button {
      svg:hover {
        color: #aea3b0;
      }
    }
  }
`
