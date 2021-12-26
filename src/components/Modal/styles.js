import styled from 'styled-components'

export const Overlay = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.6);

  backdrop-filter: blur(5px);
`

export const Container = styled.div`
  max-width: 450px;
  width: 100%;

  padding: 1.5rem;

  border-radius: 0.5rem;

  background-color: #fff;

  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

  h1 {
    font-size: 1.5rem;

    color: ${({ theme, danger }) =>
      danger ? theme.colors.danger.main : 'inherit'};
  }

  p {
    margin-top: 0.5rem;
  }
`

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  margin-top: 1.5rem;

  .cancel-button {
    background: none;

    border: none;

    font-size: 1rem;

    margin-right: 8px;

    color: ${({ theme }) => theme.colors.gray.light};
  }
`
