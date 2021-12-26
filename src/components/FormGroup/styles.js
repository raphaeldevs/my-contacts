import styled from 'styled-components'

export const Container = styled.div`
  & + & {
    margin-top: 1rem;
  }

  small {
    display: block;

    margin-top: 0.5rem;

    font-size: 0.75rem;

    color: ${props => props.theme.colors.danger.main};
  }
`
