import styled, { css } from 'styled-components'

export default styled.button`
  height: 52px;

  padding: 0 1rem;

  border: none;
  border-radius: 0.25rem;

  font-weight: bold;

  color: #fff;

  background-color: ${({ theme }) => theme.colors.primary.main};

  transition: background-color 0.2s ease-in;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.light};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.primary.dark};
  }

  &:disabled {
    background-color: #ccc;

    cursor: not-allowed;
  }

  ${({ theme, danger }) =>
    danger &&
    css`
      background-color: ${theme.colors.danger.main};

      &:hover {
        background-color: ${theme.colors.danger.light};
      }

      &:active {
        background-color: ${theme.colors.danger.dark};
      }
    `}
`
