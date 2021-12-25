import Input from '../../components/Input'
import PageHeader from '../../components/PageHeader'

function NewContact() {
  return (
    <>
      <PageHeader title="Novo contato" />
      <Input placeholder="Nome" />
      <Input as="select">
        <option value="123">Work</option>
      </Input>
    </>
  )
}

export default NewContact
