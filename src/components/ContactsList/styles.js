import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 2rem;
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  strong {
    color: #222;
    font-size: 1.5rem;
  }

  a {
    padding: 0.5rem 1rem;

    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    border-radius: 0.25rem;

    font-weight: bold;

    color: ${({ theme }) => theme.colors.primary.main};

    text-decoration: none;

    transition: all 0.2s ease-in;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primary.main};
      color: #fff;
    }
  }
`
