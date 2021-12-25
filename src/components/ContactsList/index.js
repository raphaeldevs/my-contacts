import { Card, Container, Header, ListContainer } from './styles'

import arrow from '../../assets/images/icons/arrow.svg'
import edit from '../../assets/images/icons/edit.svg'
import trash from '../../assets/images/icons/trash.svg'

function ContactsList() {
  return (
    <Container>
      <Header>
        <strong>3 contatos</strong>
        <a href="/">Novo contato</a>
      </Header>

      <ListContainer>
        <header>
          <button type="button" className="sort-button">
            <span>Nome</span>
            <img
              src={arrow}
              alt="Seta apontando para cima"
              title="Ordenar lista em ordem crescente"
            />
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
            <a href="/">
              <img src={edit} alt="Editar" title="Editar contato" />
            </a>

            <button type="button">
              <img src={trash} alt="Excluir" title="Excluir contato" />
            </button>
          </div>
        </Card>

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
            <a href="/">
              <img src={edit} alt="Editar" title="Editar contato" />
            </a>

            <button type="button">
              <img src={trash} alt="Excluir" title="Excluir contato" />
            </button>
          </div>
        </Card>

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
            <a href="/">
              <img src={edit} alt="Editar" title="Editar contato" />
            </a>

            <button type="button">
              <img src={trash} alt="Excluir" title="Excluir contato" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  )
}

export default ContactsList
