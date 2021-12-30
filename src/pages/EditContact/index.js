import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import ContactService from '../../services/ContactService'

import ContactForm from '../../components/ContactForm'
import PageHeader from '../../components/PageHeader'

function EditContact() {
  const [contact, setContact] = useState({})

  const { id } = useParams()

  useEffect(() => {
    async function loadContact() {
      const contact = await ContactService.getContact(id)

      setContact(contact)
    }

    loadContact()
  }, [id])

  return (
    <>
      <PageHeader title="Editar contato" />
      <ContactForm buttonLabel="Salvar alterações" startValues={contact} />
    </>
  )
}

export default EditContact
