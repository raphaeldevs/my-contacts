import { Link } from 'react-router-dom'

import {
  Card,
  Container,
  Header,
  InputSearchContainer,
  ListContainer
} from './styles'

import arrow from '../../assets/images/icons/arrow.svg'
import edit from '../../assets/images/icons/edit.svg'
import trash from '../../assets/images/icons/trash.svg'

function Home() {
  return (
    <Container>
      <InputSearchContainer>
        <form>
          <input type="text" placeholder="Pesquise pelo nome" />
        </form>
      </InputSearchContainer>

      <Header>
        <strong>3 contatos</strong>
        <Link to="/new">Novo contato</Link>
      </Header>

      <ListContainer>
        <header>
          <button
            type="button"
            className="sort-button"
            title="Ordenar lista em ordem crescente"
          >
            <span>Nome</span>
            <img src={arrow} alt="Seta apontando para cima" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Raphael Corrêa</strong>
              <small>Work</small>
            </div>
            <span>oi@raphaeldevs.com.br</span>
            <span>(98) 99999-9999</span>
          </div>

          <div className="actions">
            <Link to="/edit/123">
              <img src={edit} alt="Editar" title="Editar contato" />
            </Link>

            <button type="button">
              <img src={trash} alt="Excluir" title="Excluir contato" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  )
}

export default Home
