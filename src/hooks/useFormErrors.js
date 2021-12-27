import { useState } from 'react'

function useFormErrors() {
  const [errors, setErrors] = useState([])

  function setError({ field, message }) {
    const errorAlreadyExists = errors.find(error => error.field === field)

    if (errorAlreadyExists) return

    setErrors(errors => [...errors, { field, message }])
  }

  function removeError(fieldName) {
    setErrors(errors => errors.filter(error => error.field !== fieldName))
  }

  function getErrorMessageByField(field) {
    const error = errors.find(error => error.field === field)

    return error ? error.message : ''
  }

  return { errors, setError, removeError, getErrorMessageByField }
}

export default useFormErrors

/*
  Motor
  Painel
  E qual é o problema?
*/
