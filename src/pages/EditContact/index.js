import ContactForm from '../../components/ContactForm'
import PageHeader from '../../components/PageHeader'

function EditContact() {
  return (
    <>
      <PageHeader title="Novo contato" />
      <ContactForm buttonLabel="Salvar alterações" />
    </>
  )
}

export default EditContact
