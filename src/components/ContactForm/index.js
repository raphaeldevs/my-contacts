import PropTypes from 'prop-types'

import { useState } from 'react'

import FormGroup from '../FormGroup'
import Input from '../Input'
import Button from '../Button'

import { ButtonContainer } from './styles'

function ContactForm({ buttonLabel }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [category, setCategory] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    console.log({ name, email, phone, category })
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormGroup>
        <Input
          name="name"
          placeholder="Nome"
          onChange={event => setName(event.target.value)}
          value={name}
        />
      </FormGroup>

      <FormGroup>
        <Input
          name="email"
          placeholder="E-mail"
          onChange={event => setEmail(event.target.value)}
          value={email}
        />
      </FormGroup>

      <FormGroup>
        <Input
          name="phone"
          placeholder="Telefone"
          onChange={event => setPhone(event.target.value)}
          value={phone}
        />
      </FormGroup>

      <FormGroup>
        <Input
          as="select"
          name="category"
          onChange={event => setCategory(event.target.value)}
          value={category}
        >
          <option value="">Selecione uma categoria</option>
          <option value="work">Work</option>
        </Input>
      </FormGroup>

      <ButtonContainer>
        <Button type="submit">{buttonLabel}</Button>
      </ButtonContainer>
    </form>
  )
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired
}

export default ContactForm
