import styled from 'styled-components'

export const Container = styled.div``

export const InputSearchContainer = styled.div`
  width: 100%;

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

export const Header = styled.header`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: center;

  margin: 2rem 0 1rem;
  padding-bottom: 1rem;

  border-bottom: 2px solid ${({ theme }) => theme.colors.gray.lighter};

  strong {
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

export const ListHeader = styled.header`
  margin-top: 1.5rem;

  margin-bottom: 0.5rem;

  button {
    display: flex;
    align-items: center;

    border: none;

    background: none;

    span {
      margin-right: 0.5rem;

      color: ${({ theme }) => theme.colors.primary.main};

      font-weight: bold;
    }

    img {
      transition: transform 0.2s ease-in;

      transform: ${({ orderBy }) =>
        orderBy === 'asc' ? 'rotate(180deg)' : 'inherit'};
    }
  }
`

export const Card = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 1rem;
  padding: 1rem;

  background: #fff;

  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

  border-radius: 0.25rem;

  .info {
    .contact-name {
      display: flex;
      align-items: center;

      small {
        margin-left: 0.5rem;
        padding: 0.25rem 0.5rem;

        background-color: ${({ theme }) => theme.colors.primary.lighter};

        border-radius: 0.25rem;

        font-weight: bold;

        color: ${({ theme }) => theme.colors.primary.main};

        text-transform: uppercase;
      }
    }

    span {
      display: block;

      color: ${({ theme }) => theme.colors.gray.light};
    }
  }

  .actions {
    display: flex;
    align-items: center;

    button {
      margin-left: 0.5rem;
      background: none;

      border: none;
    }
  }
`

export const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;

  .details {
    margin-left: 1.5rem;

    strong {
      display: block;

      margin-bottom: 0.5rem;

      font-size: 1.3rem;

      color: ${({ theme }) => theme.colors.danger.main};
    }
  }
`
export const EmptyListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 1rem;

  p {
    margin-top: 0.5rem;

    text-align: center;

    color: ${({ theme }) => theme.colors.gray.light};

    strong {
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }
`

export const SearchNotFoundContainer = styled.div`
  display: flex;
  align-items: flex-start;

  margin-top: 1rem;

  img {
    margin-right: 1.5rem;
  }

  span {
    color: ${({ theme }) => theme.colors.gray.light};

    word-break: break-word;
  }
`
