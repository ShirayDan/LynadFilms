import { FC } from 'react'
import './ViewAll.scss'
import { Link } from 'react-router-dom'

import { FaChevronDown } from 'react-icons/fa'

interface IViewAll {
  link: string
  text: string
}

export const ViewAll: FC<IViewAll> = ({ link, text }) => {
  return (
    <Link
      to={link}
      className='uppercase text-grey inline text-sm flex items-center lg:hover:text-[purple] dark:lg:hover:text-yellow ease-out duration-300'
    >
      {text} <FaChevronDown size='12px' className='ml-1.5 -rotate-90' />
    </Link>
  )
}
