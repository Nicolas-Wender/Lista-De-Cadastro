import Form from './components/Form'
import Table from './components/Table'


export default function App() {
  return (
    <div className="Wireframe1  pb-14 bg-white flex justify-center items-center">
      <div className="ContactModals6 grow shrink basis-0 self-stretch py-20 bg-white flex-col  items-center gap-16 flex">
        <div className="SectionTitle  flex-col justify-center items-center gap-4 flex  self-stretch text-center text-black text-5xl font-bold font-['Roboto'] leading-10">
          Cadastre os usuários aqui
        </div>

        <Form />

        <Table />
      </div>
    </div>
  )
}

