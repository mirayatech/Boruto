/* eslint-disable react/react-in-jsx-scope */

import { Dispatch, SetStateAction } from 'react'
import { FiTrash2 } from 'react-icons/fi'

export type ButtonProps = {
  setOpenModal: Dispatch<SetStateAction<boolean>>
}

export function Buttons({ setOpenModal }: ButtonProps) {
  return (
    <div className="absolute top-[15px] right-[20px] flex">
      <button
        onClick={() => setOpenModal(true)}
        aria-label="Delete article"
        className="bg-[#f0f0f0cb] w-[65px] text-[25px] p-[8px] flex justify-center rounded-[2px] transition ease-in-out duration-200 hover:bg-white"
      >
        <FiTrash2 />
      </button>
    </div>
  )
}
