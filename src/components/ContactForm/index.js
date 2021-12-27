import PropTypes from 'prop-types'

import { useState } from 'react'

import useFormErrors from '../../hooks/useFormErrors'
import isEmailValid from '../../utils/isEmailValid'

import Button from '../Button'
import FormGroup from '../FormGroup'
import Input from '../Input'

import { ButtonContainer } from './styles'
import formatPhone from '../../utils/formatPhone'

function ContactForm({ buttonLabel }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [category, setCategory] = useState('')

  const { errors, setError, removeError, getErrorMessageByField } =
    useFormErrors()

  const isFormValid = name && !errors.length

  function handleNameChange(event) {
    setName(event.target.value)

    if (!event.target.value) {
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

    if (event.target.value && !isEmailValid(event.target.value)) {
      setError({
        field: 'email',
        message: 'Email inválido'
      })
    } else {
      removeError('email')
    }
  }

  function handlePhoneChange(event) {
    setPhone(formatPhone(event.target.value))
  }

  function handleSubmit(event) {
    event.preventDefault()

    // eslint-disable-next-line no-console
    console.log({ name, email, phone: phone.replace(/\D/g, ''), category })
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <FormGroup error={getErrorMessageByField('name')}>
        <Input
          name="name"
          placeholder="Nome *"
          onChange={handleNameChange}
          value={name}
          error={getErrorMessageByField('name')}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByField('email')}>
        <Input
          type="email"
          name="email"
          placeholder="E-mail"
          onChange={handleEmailChange}
          value={email}
          error={getErrorMessageByField('email')}
        />
      </FormGroup>

      <FormGroup>
        <Input
          type="tel"
          name="phone"
          placeholder="Telefone"
          onChange={handlePhoneChange}
          value={phone}
          maxLength="16"
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
        <Button type="submit" disabled={!isFormValid}>
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
