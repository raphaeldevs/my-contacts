import { useEffect, useMemo, useState } from 'react'

import { Link } from 'react-router-dom'

import usePluralize from '../../hooks/usePluralize'

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
  const [searchTerm, setSearchTerm] = useState('')

  const filteredContacts = useMemo(
    () =>
      contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [searchTerm, contacts]
  )

  function handleChangeSearchTerm(event) {
    setSearchTerm(event.target.value.trim())
  }

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
          <input
            type="search"
            placeholder="Pesquise pelo nome"
            onChange={handleChangeSearchTerm}
          />
        </form>
      </InputSearchContainer>

      <Header>
        <strong>
          {usePluralize({
            count: filteredContacts.length,
            singularText: '1 contato',
            pluralText: 'contatos',
            noDataText: 'Sem contatos'
          })}
        </strong>
        <Link to="/new" title="Criar novo contato">
          Novo contato
        </Link>
      </Header>

      {Boolean(filteredContacts.length) && (
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
      )}

      {Boolean(filteredContacts.length) &&
        filteredContacts.map(contact => (
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
        ))}
    </Container>
  )
}

export default Home
