import { useState } from 'react'
import Label from './Label'
import axios from 'axios'

export default function Form({ getUsers }) {
  const [dadosInput, setDadosInput] = useState({
    Nome: '',
    Telefone: '',
    DataDeNascimento: '',
    Email: ''
  })

  const handleChange = (id, e) => {
    const newDadosInput = { ...dadosInput }
    newDadosInput[id] = e
    setDadosInput(newDadosInput)
  }

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      await axios.post('http://localhost:8000/user', dadosInput)
      getUsers()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form
      className="Form h-64 flex-col justify-start items-center gap-6 flex"
      onSubmit={handleSubmit}
    >
      <div className="Inputs self-stretch justify-start items-start gap-6 inline-flex">
        <Label
          label="Nome"
          id="Nome"
          type="text"
          placeholder="Digite seu nome"
          handleChange={handleChange}
        />
        <Label
          label="Telefone"
          id="Telefone"
          type="text"
          placeholder="Digite seu telefone"
          handleChange={handleChange}
        />
      </div>

      <div className="Inputs self-stretch justify-start items-start gap-6 inline-flex">
        <Label
          label="Data de Nascimento"
          id="DataDeNascimento"
          type="date"
          placeholder="Digite sua data de Nascimento"
          handleChange={handleChange}
        />
        <Label
          label="Email"
          id="Email"
          type="email"
          placeholder="Digite seu email"
          handleChange={handleChange}
        />
      </div>

      <button
        className="Button p-4 px-8 bg-black rounded-lg border border-black justify-center items-center gap-2 flex text-white text-xl font-normal font-['Roboto'] "
        type="submit"
      >
        Enviar
      </button>
    </form>
  )
}
