import { createPortal } from 'react-dom'

import PropTypes from 'prop-types'

import Button from '../Button'

import { Container, Overlay, Footer } from './styles'

function Modal({
  danger,
  isOpen,
  title,
  message,
  confirmLabel,
  onCancel,
  onConfirm
}) {
  return isOpen
    ? createPortal(
        <Overlay>
          <Container danger={danger}>
            <h1>{title}</h1>

            <p>{message}</p>

            <Footer>
              <button
                type="button"
                className="cancel-button"
                onClick={onCancel}
              >
                Cancelar
              </button>
              <Button type="button" danger onClick={onConfirm}>
                {confirmLabel}
              </Button>
            </Footer>
          </Container>
        </Overlay>,
        document.getElementById('modal-root')
      )
    : null
}

Modal.propTypes = {
  danger: PropTypes.bool,
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string,
  confirmLabel: PropTypes.string.isRequired,
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired
}

Modal.defaultProps = {
  danger: false,
  message: ''
}

export default Modal
