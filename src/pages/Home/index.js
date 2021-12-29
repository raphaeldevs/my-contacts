import { useCallback, useEffect, useMemo, useState } from 'react'

import { Link } from 'react-router-dom'

import ContactService from '../../services/ContactService'

import formatPhone from '../../utils/formatPhone'

import Pluralize from '../../hooks/usePluralize'

import Button from '../../components/Button'
import Loader from '../../components/Loader'

import {
  Card,
  Container,
  ErrorContainer,
  Header,
  InputSearchContainer,
  ListHeader
} from './styles'

import arrow from '../../assets/images/icons/arrow.svg'
import edit from '../../assets/images/icons/edit.svg'
import trash from '../../assets/images/icons/trash.svg'
import sad from '../../assets/images/icons/sad.svg'

function Home() {
  const [contacts, setContacts] = useState([])
  const [orderBy, setOrderBy] = useState('asc')
  const [searchTerm, setSearchTerm] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const filteredContacts = useMemo(
    () =>
      contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [contacts, searchTerm]
  )

  function handleChangeSearchTerm(event) {
    setSearchTerm(event.target.value.trim())
  }

  function handleToggleOrderBy() {
    setOrderBy(order => (order === 'asc' ? 'desc' : 'asc'))
  }

  const loadContacts = useCallback(async () => {
    try {
      setIsLoading(true)

      const contacts = await ContactService.listContacts(orderBy)

      setContacts(contacts)
      setHasError(false)
    } catch (error) {
      setHasError(true)
    } finally {
      setIsLoading(false)
    }
  }, [orderBy])

  function handleTryAgain() {
    loadContacts()
  }

  useEffect(() => {
    loadContacts()
  }, [loadContacts, orderBy])

  return (
    <Container>
      <Loader isLoading={isLoading} />
      <InputSearchContainer>
        <input
          type="search"
          placeholder="Pesquise pelo nome"
          onChange={handleChangeSearchTerm}
        />
      </InputSearchContainer>
      <Header hasError={hasError}>
        {!hasError && (
          <strong>
            {Pluralize({
              count: filteredContacts.length,
              singularText: '1 contato',
              pluralText: 'contatos',
              noDataText: 'Sem contatos'
            })}
          </strong>
        )}

        <Link to="/new" title="Criar novo contato">
          Novo contato
        </Link>
      </Header>

      {hasError && (
        <ErrorContainer>
          <img src={sad} alt="Rosto triste" />
          <div className="details">
            <strong>Ocorreu um erro ao obter os seus contatos</strong>
            <Button onClick={handleTryAgain}>Tentar novamente</Button>
          </div>
        </ErrorContainer>
      )}

      {Boolean(filteredContacts.length) && !hasError && (
        <>
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

          {filteredContacts.map(contact => (
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
        </>
      )}
    </Container>
  )
}

export default Home
