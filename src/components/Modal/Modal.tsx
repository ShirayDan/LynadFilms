import { FC, ReactNode, MouseEvent } from 'react'
import './Modal.scss'

interface IModal {
  children: ReactNode
  handleClick: (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => void
}

export const Modal: FC<IModal> = ({ children, handleClick }) => {
  return (
    <div className='modal'>
      <div className='overlay' onClick={(e) => handleClick(e)}></div>
      <div className='modal-content'>{children}</div>
    </div>
  )
}
