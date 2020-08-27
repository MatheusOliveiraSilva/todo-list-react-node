import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const StyledHello = styled.div`
  padding: 0 35px;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-weight: 400;
    font-size: 3.5rem;
  }

  p {
    font-size: 2.5rem;
    font-weight: 300;

    a {
      color: #1f92ee;

      transition: color 0.3s;

      &:hover {
        color: #1c5d99;
      }
    }
  }
`
export const BackButton = styled(Link)`
  margin-top: 120px;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 30%;
  height: 75px;

  border-radius: 5px;
  background-color: #1f92ee;
  border: none;

  font-size: 2.8rem;
  color: #fff;

  transition: transform 0.3s;

  cursor: pointer;

  span {
    margin-left: 20px;
  }

  &:hover {
    transform: translateY(-20px);
    color: #fff;
  }
`
