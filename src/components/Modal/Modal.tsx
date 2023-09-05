import { FC, ReactNode, MouseEvent } from 'react'
import './Modal.scss'

interface IModal {
  children: ReactNode
  handleClick: (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => void
  guns?: boolean
}

export const Modal: FC<IModal> = ({ children, handleClick, guns }) => {
  return (
    <div className='modal'>
      <div className='overlay' onClick={(e) => handleClick(e)}></div>
      <div className={`modal-content ${guns && 'modal-guns'}`}>{children}</div>
    </div>
  )
}
