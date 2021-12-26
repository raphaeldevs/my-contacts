import PropTypes from 'prop-types'

import FormGroup from '../FormGroup'
import Input from '../Input'
import Button from '../Button'

import { ButtonContainer, Form } from './styles'

function ContactForm({ buttonLabel }) {
  return (
    <Form>
      <FormGroup>
        <Input name="name" placeholder="Nome" />
      </FormGroup>

      <FormGroup error="O formato do e-mail é inválido">
        <Input name="email" placeholder="E-mail" error />
      </FormGroup>

      <FormGroup>
        <Input name="phone" placeholder="Telefone" />
      </FormGroup>

      <FormGroup>
        <Input as="select">
          <option value="work">Work</option>
        </Input>
      </FormGroup>

      <ButtonContainer>
        <Button type="submit">{buttonLabel}</Button>
      </ButtonContainer>
    </Form>
  )
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired
}

export default ContactForm
