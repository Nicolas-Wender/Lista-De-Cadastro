import React, { useState, useEffect } from 'react'
import { BiTrash } from 'react-icons/bi'
import { AiOutlineEdit } from 'react-icons/ai'

const dadosEdit = [
  {
    id: 1,
    Nome: 'Nicolas',
    Email: 'Gomes',
    Telefone: 'Gomes',
    DataNascimento: 'Gomes'
  },
  {
    id: 2,
    Nome: 'Eduardo',
    Email: 'Maciel',
    Telefone: 'Maciel',
    DataNascimento: 'Maciel'
  }
]

export default function Table() {
  const [dados, setDados] = useState([])
  const [edit, setEdit] = useState(dados.map(() => false))

  useEffect(() => {
    setDados(dadosEdit)
  }, [])

  const handleChange = (id, value, input) => {
    const novosDados = [...dados]
    novosDados.forEach(dado => {
      if (dado.id === id) {
        dado[input] = value
      }
    })

    setDados(novosDados)
  }

  const mudarEdit = index => {
    const novoArray = [...edit]
    novoArray[index] = !novoArray[index]
    setEdit(novoArray)
  }

  const excluirDado = id => {
    const novosDados = [...dados]
    const indiceParaExcluir = novosDados.findIndex(objeto => objeto.id === id)

    if (indiceParaExcluir !== -1) {
      novosDados.splice(indiceParaExcluir, 1)
    }
    setDados(novosDados)
  }

  return (
    <table className="w-4/6 p-5 rounded-md m-5">
      <thead className="">
        <tr className="">
          <th className="text-start pb-1 pl-6 text-black text-base font-semibold font-['Roboto'] leading-normal">
            Nome
          </th>
          <th className="text-start pb-1 pl-6 text-black text-base font-semibold font-['Roboto'] leading-normal">
            Email
          </th>
          <th className="text-start pb-1 pl-6 text-black text-base font-semibold font-['Roboto'] leading-normal">
            Telefone
          </th>
          <th className="text-start pb-1 pl-6 text-black text-base font-semibold font-['Roboto'] leading-normal">
            Data de Nascimento
          </th>
          <th className="text-end pb-1 pr-6 text-black text-base font-semibold font-['Roboto'] leading-normal">
            Opções
          </th>
        </tr>
      </thead>
      <tbody className="border border-black rounded-lg ">
        {dados.map((dado, index) => (
          <tr key={dado.id}>
            {Object.entries(dado)
              .slice(1)
              .map(value => (
                <td
                  key={value[0]}
                  className={
                    index % 2 === 1
                      ? "pt-4 text-start w-auto text-base font-medium font-['Roboto'] leading-normal h-20 pl-6 pb-4"
                      : "pt-4 text-start w-auto text-base font-medium font-['Roboto'] leading-normal h-20 pl-6 pb-4 bg-zinc-100"
                  }
                >
                  <input
                    className={
                      !edit[index]
                        ? 'p-2 bg-transparent'
                        : 'p-2 border border-black'
                    }
                    type="text"
                    value={value[1]}
                    onChange={e =>
                      handleChange(dado.id, e.target.value, value[0])
                    }
                    disabled={!edit[index]}
                  />
                </td>
              ))}
            <td
              className={
                index % 2 === 1
                  ? "pt-4 text-end w-auto text-base font-medium font-['Roboto'] leading-normal h-20 pr-6 gap-4 flex justify-end"
                  : "pt-4 text-end w-auto text-base font-medium font-['Roboto'] leading-normal h-20 pr-6 gap-4 flex justify-end bg-zinc-100"
              }
            >
              <button
                className="Button h-11 w-11 flex justify-center items-center bg-black rounded-lg border border-black text-white text-xl"
                onClick={() => {
                  mudarEdit(index)
                }}
              >
                <AiOutlineEdit />
              </button>
              <button
                className="Button h-11 w-11 flex justify-center items-center bg-black rounded-lg border border-black text-white text-xl"
                onClick={() => {
                  excluirDado(dado.id)
                }}
              >
                <BiTrash />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
