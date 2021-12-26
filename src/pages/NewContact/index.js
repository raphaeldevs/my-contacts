import ContactForm from '../../components/ContactForm'
import PageHeader from '../../components/PageHeader'

function NewContact() {
  return (
    <>
      <PageHeader title="Novo contato" />
      <ContactForm buttonLabel="Criar contato" />
    </>
  )
}

export default NewContact
