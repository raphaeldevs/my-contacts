import styled from 'styled-components'

export default styled.button`
  width: 100%;
  height: 52px;

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
`
