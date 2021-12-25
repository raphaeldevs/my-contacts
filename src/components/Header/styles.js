import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin-top: 4rem;
`

export const InputSearchContainer = styled.div`
  width: 100%;

  margin-top: 3rem;

  input {
    width: 100%;
    height: 50px;

    padding: 0 1rem;

    border: none;
    border-radius: 1.5rem;

    outline: 0;

    background-color: white;

    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

    &::placeholder {
      color: #bcbcbc;
    }
  }
`
