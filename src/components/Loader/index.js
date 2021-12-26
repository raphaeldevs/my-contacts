import { createPortal } from 'react-dom'
import { Overlay } from './styles'

function Loader() {
  return createPortal(
    <Overlay>
      <div className="loader" />
    </Overlay>,
    document.getElementById('loader-root')
  )
}

export default Loader
