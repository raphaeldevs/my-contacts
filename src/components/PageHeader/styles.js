import styled from 'styled-components'

export const Container = styled.header`
  a {
    display: flex;
    align-items: center;

    text-decoration: none;

    span {
      font-weight: bold;

      color: ${props => props.theme.colors.primary};
    }

    img {
      margin-right: 0.5rem;

      transform: rotate(-90deg);
    }
  }

  h1 {
    margin-top: 0.5rem;

    font-size: 1.5rem;
  }
`
