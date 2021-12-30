import PropTypes from 'prop-types'

import { useEffect, useState } from 'react'

import { useHistory } from 'react-router-dom'

import CategoryService from '../../services/CategoryService'
import ContactService from '../../services/ContactService'

import useFormErrors from '../../hooks/useFormErrors'
import isEmailValid from '../../utils/isEmailValid'
import formatPhone from '../../utils/formatPhone'

import FormGroup from '../FormGroup'
import Input from '../Input'
import Button from '../Button'
import Loader from '../Loader'

import { ButtonContainer } from './styles'

function ContactForm({ buttonLabel }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [category, setCategory] = useState('')

  const [categories, setCategories] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const { errors, setError, removeError, getErrorMessageByField } =
    useFormErrors()

  const history = useHistory()

  const isFormValid = name && !errors.length

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
    setEmail(event.target.value.trim())

    if (event.target.value.trim() && !isEmailValid(event.target.value)) {
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

  async function handleSubmit(event) {
    event.preventDefault()

    try {
      setIsLoading(true)

      await ContactService.createContact({
        name,
        email,
        phone: phone.replace(/\D/g, ''),
        category
      })

      history.push('/')
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    async function fetchCategories() {
      try {
        setIsLoading(true)

        const categories = await CategoryService.listCategories()

        setCategories(categories)
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchCategories()
  }, [])

  return (
    <>
      <Loader isLoading={isLoading} />

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
            onChange={event => setCategory(event.target.value.trim())}
            value={category}
          >
            <option value="">Selecione uma categoria</option>
            {Boolean(categories.length) &&
              categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
          </Input>
        </FormGroup>

        <ButtonContainer>
          <Button type="submit" disabled={!isFormValid} onClick={handleSubmit}>
            {buttonLabel}
          </Button>
        </ButtonContainer>
      </form>
    </>
  )
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired
}

export default ContactForm
