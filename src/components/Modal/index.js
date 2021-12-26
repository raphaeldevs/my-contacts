import PropTypes from 'prop-types'

import Button from '../Button'

import { Container, Overlay, Footer } from './styles'

function Modal({ danger }) {
  return (
    <Overlay>
      <Container danger={danger}>
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

Modal.propTypes = {
  danger: PropTypes.bool
}

Modal.defaultProps = {
  danger: false
}

export default Modal
