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

      <FormGroup>
        <Input name="email" placeholder="E-mail" />
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
