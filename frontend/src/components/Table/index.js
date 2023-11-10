import React from 'react'
import { BiTrash } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';




export default function Table() {
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
        {[...Array(6)].map((_, index) => (
          <tr key={index}>
            <td
              className={
                index % 2 === 1
                  ? "pt-4 text-start w-auto text-base font-medium font-['Roboto'] leading-normal h-20 pl-6 "
                  : "pt-4 text-start w-auto text-base font-medium font-['Roboto'] leading-normal h-20 pl-6 v bg-zinc-100"
              }
            >
              Linha {index + 1}, Coluna 1
            </td>
            <td
              className={
                index % 2 === 1
                  ? "pt-4 text-start w-auto text-base font-medium font-['Roboto'] leading-normal h-20 pl-6 "
                  : "pt-4 text-start w-auto text-base font-medium font-['Roboto'] leading-normal h-20 pl-6 v bg-zinc-100"
              }
            >
              Linha {index + 1}, Coluna 2
            </td>
            <td
              className={
                index % 2 === 1
                  ? "pt-4 text-start w-auto text-base font-medium font-['Roboto'] leading-normal h-20 pl-6 "
                  : "pt-4 text-start w-auto text-base font-medium font-['Roboto'] leading-normal h-20 pl-6 v bg-zinc-100"
              }
            >
              Linha {index + 1}, Coluna 3
            </td>
            <td
              className={
                index % 2 === 1
                  ? "pt-4 text-start w-auto text-base font-medium font-['Roboto'] leading-normal h-20 pl-6 "
                  : "pt-4 text-start w-auto text-base font-medium font-['Roboto'] leading-normal h-20 pl-6 v bg-zinc-100"
              }
            >
              Linha {index + 1}, Coluna 4
            </td>
            <td
              className={
                index % 2 === 1
                  ? "pt-4 text-end w-auto text-base font-medium font-['Roboto'] leading-normal h-20 pr-6 gap-4 flex justify-end"
                  : "pt-4 text-end w-auto text-base font-medium font-['Roboto'] leading-normal h-20 pr-6 gap-4 flex justify-end bg-zinc-100"
              }
            >
              <button className="Button h-11 w-11 flex justify-center items-center bg-black rounded-lg border border-black text-white text-xl">
                <AiOutlineEdit/>
              </button>
              <button className="Button h-11 w-11 flex justify-center items-center bg-black rounded-lg border border-black text-white text-xl">
                <BiTrash/>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
