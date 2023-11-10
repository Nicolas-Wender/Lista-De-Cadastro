import Label from './Label'

export default function Form() {
  return (
    <form className="Form h-64 flex-col justify-start items-center gap-6 flex">
      <div className="Inputs self-stretch justify-start items-start gap-6 inline-flex">
        <Label
          label="Nome"
          id="nome"
          type="text"
          placeholder="Digite seu nome"
        />
        <Label
          label="Telefone"
          id="telefone"
          type="tel"
          placeholder="Digite seu telefone"
        />
      </div>

      <div className="Inputs self-stretch justify-start items-start gap-6 inline-flex">
        <Label
          label="Data de Nascimento"
          id="dataNascimento"
          type="date"
          placeholder="Digite sua data de Nascimento"
        />
        <Label
          label="Email"
          id="email"
          type="email"
          placeholder="Digite seu email"
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

