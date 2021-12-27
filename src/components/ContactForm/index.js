import PropTypes from 'prop-types'

import { useState } from 'react'

import isEmailValid from '../../utils/isEmailValid'
import useFormErrors from '../../hooks/useFormErrors'

import FormGroup from '../FormGroup'
import Input from '../Input'
import Button from '../Button'

import { ButtonContainer } from './styles'

function ContactForm({ buttonLabel }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [category, setCategory] = useState('')

  const { errors, setError, removeError, getErrorMessageByField } =
    useFormErrors()

  function handleNameChange(event) {
    setName(event.target.value)

    if (!event.target.value.trim()) {
      setError({
        field: 'name',
        message: 'Nome é obrigatório'
      })
    } else {
      removeError('name')
    }
  }

  function handleEmailChange(event) {
    setEmail(event.target.value)

    if (event.target.value.trim() && !isEmailValid(event.target.value)) {
      setError({
        field: 'email',
        message: 'Email inválido'
      })
    } else {
      removeError('email')
    }
  }

  function handleSubmit(event) {
    event.preventDefault()

    // eslint-disable-next-line no-console
    console.log({ name, email, phone, category })
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormGroup error={getErrorMessageByField('name')}>
        <Input
          name="name"
          placeholder="Nome"
          onChange={handleNameChange}
          value={name}
          error={getErrorMessageByField('name')}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByField('email')}>
        <Input
          name="email"
          placeholder="E-mail"
          onChange={handleEmailChange}
          value={email}
          error={getErrorMessageByField('email')}
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
        <Button type="submit" disabled={Boolean(errors.length)}>
          {buttonLabel}
        </Button>
      </ButtonContainer>
    </form>
  )
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired
}

export default ContactForm
