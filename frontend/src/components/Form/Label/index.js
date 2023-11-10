import React from 'react'

export default function Label(props) {
  return (
    <div className="Input grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
      <label
        className="self-stretch pl-1 text-black text-base font-normal font-['Roboto'] leading-normal"
        htmlFor={props.id}
      >
        {props.label}:
      </label>
      <input
        className="self-stretch rounded-lg border-black border p-4 pl-4 text-xl"
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
      />
    </div>
  )
}
