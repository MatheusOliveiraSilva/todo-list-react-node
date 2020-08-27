import styled from 'styled-components'

// export const XButton = styled.div``

export const StyledLogin = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f3f3f3;
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    width: 420px;
    box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.25);
    background-color: #fff;
    border-radius: 7px;
    padding: 1em 1.6em 3.7em;
    box-sizing: border-box;
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;

    fieldset {
      margin-top: 40px;
      margin-bottom: 30px;
      padding: 0;
      width: 100%;

      legend {
        width: 100%;
        text-align: center;
        font-weight: 300;
        font-size: 1.5rem;
        margin-bottom: 1.8em;
      }
    }
  }
`
