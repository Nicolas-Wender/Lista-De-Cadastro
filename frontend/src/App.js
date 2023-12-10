import { useState, useEffect } from 'react'
import axios from 'axios'
import Form from './components/Form'
import Table from './components/Table'
export default function App() {
  const [dados, setDados] = useState([])

  const getUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8000/user')
      const formattedData = response.data.map(data => ({
        ...data,
        DataDeNascimento: new Date(data.DataDeNascimento).toLocaleDateString(
          'pt-BR'
        )
      }))
      setDados(formattedData)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getUsers()
  }, [setDados])

  return (
    <div className="Wireframe1  pb-14 bg-white flex justify-center items-center">
      <div className="ContactModals6 grow shrink basis-0 self-stretch py-20 bg-white flex-col  items-center gap-16 flex">
        <div className="SectionTitle  flex-col justify-center items-center gap-4 flex  self-stretch text-center text-black text-5xl font-bold font-['Roboto'] leading-10">
          Cadastre os usuários aqui
        </div>
        <Form getUsers={getUsers} />
        <Table dados={dados} setDados={setDados} />
      </div>
    </div>
  )
}
