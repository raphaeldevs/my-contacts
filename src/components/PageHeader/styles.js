import styled from 'styled-components'

export const Container = styled.header`
  margin-bottom: 1.5rem;

  a {
    display: flex;
    align-items: center;

    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }

    span {
      font-weight: bold;

      color: ${props => props.theme.colors.primary.main};
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
