import styled, { css } from 'styled-components'

export default styled.input`
  width: 100%;
  height: 52px;

  padding: 0 1rem;

  border: 2px solid transparent;
  border-radius: 0.25rem;

  outline: none;

  background-color: #fff;

  font-size: 1rem;

  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

  transition: border-color 0.2s ease-in;

  appearance: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main};
  }

  &::placeholder {
    color: #bcbcbc;
  }

  ${({ theme, error }) =>
    error &&
    css`
      color: ${theme.colors.danger.main};

      border-color: ${theme.colors.danger.main} !important;
    `}
`
