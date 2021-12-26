import Button from '../Button'

import { Container, Overlay, Footer } from './styles'

function Modal() {
  return (
    <Overlay>
      <Container>
        <h1>Título do modal</h1>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

        <Footer>
          <button type="button" className="cancel-button">
            Cancelar
          </button>
          <Button type="button" danger>
            CTA
          </Button>
        </Footer>
      </Container>
    </Overlay>
  )
}

export default Modal
