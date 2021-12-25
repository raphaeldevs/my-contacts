import { createGlobalStyle } from 'styled-components'

const styled = { createGlobalStyle }

export const GlobalStyles = styled.createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: Sora, sans-serif;
  }

  body {
    background-color: ${({ theme }) => theme.backgroundColor};
  }

  button {
    cursor: pointer;
  }
`
