// import { motion } from 'framer-motion'
import { FC, ReactNode, MouseEvent } from 'react'
import styles from './Modal.module.css'

// import { Cross } from '../Cross'

interface IModal {
  children: ReactNode
  handleClick: (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => void
  guns?: boolean
}

export const Modal: FC<IModal> = ({ children, handleClick, guns }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.overlay} onClick={(e) => handleClick(e)}></div>
      <div className={`${styles['modal-content']} ${guns && styles['modal-guns']}`}>
        {children}
        {/* <Cross cl={styles['close-modal']} onClick={(e) => handleClick(e)} /> */}
      </div>
    </div>
  )
}
