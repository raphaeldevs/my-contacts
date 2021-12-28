import { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

import formatPhone from '../../utils/formatPhone'

import {
  Card,
  Container,
  Header,
  InputSearchContainer,
  ListHeader
} from './styles'

import arrow from '../../assets/images/icons/arrow.svg'
import edit from '../../assets/images/icons/edit.svg'
import trash from '../../assets/images/icons/trash.svg'

function Home() {
  const [contacts, setContacts] = useState([])
  const [orderBy, setOrderBy] = useState('asc')

  function handleToggleOrderBy() {
    setOrderBy(order => (order === 'asc' ? 'desc' : 'asc'))
  }

  useEffect(
    () =>
      (async () => {
        try {
          const response = await fetch(
            `http://localhost:3100/contacts?orderBy=${orderBy}`
          )
          const data = await response.json()

          setContacts(data)
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error('Erro ao buscar contatos', error)
        }
      })(),
    [orderBy]
  )

  return (
    <Container>
      <InputSearchContainer>
        <form>
          <input type="search" placeholder="Pesquise pelo nome" />
        </form>
      </InputSearchContainer>

      <Header>
        <strong>
          {contacts.length} {contacts.length > 1 ? 'contatos' : 'contato'}
        </strong>
        <Link to="/new" title="Criar novo contato">
          Novo contato
        </Link>
      </Header>

      <ListHeader orderBy={orderBy}>
        <header>
          <button
            type="button"
            className="sort-button"
            title={`Ordenar lista em ordem ${
              orderBy === 'desc' ? 'crescente' : 'decrescente'
            }`}
            onClick={handleToggleOrderBy}
          >
            <span>Nome</span>
            <img
              src={arrow}
              alt={`Seta apontando para ${
                orderBy === 'asc' ? 'cima' : 'baixo'
              }`}
            />
          </button>
        </header>
      </ListHeader>

      {contacts.length ? (
        contacts.map(contact => (
          <Card key={contact.id}>
            <div className="info">
              <div className="contact-name">
                <strong>{contact.name}</strong>
                {contact.category_name && (
                  <small>{contact.category_name}</small>
                )}
              </div>
              <span>{contact.email}</span>
              {contact.phone && <span>{formatPhone(contact.phone)}</span>}
            </div>

            <div className="actions">
              <Link to={`/edit/${contact.id}`}>
                <img src={edit} alt="Editar" title="Editar contato" />
              </Link>

              <button type="button">
                <img src={trash} alt="Excluir" title="Excluir contato" />
              </button>
            </div>
          </Card>
        ))
      ) : (
        <h4>Sem contatos</h4>
      )}
    </Container>
  )
}

export default Home
