import { FC } from 'react'
import { Link } from 'react-router-dom'

import { TCrew } from '../../data/types'

interface IPersonList {
  data: Array<TCrew>
}

export const PersonList: FC<IPersonList> = ({ data }) => {
  return (
    <ul>
      {data.map((item) => {
        return (
          <li key={item.name} className='flex items-center justify-between py-3'>
            <div className='flex items-center justify-center text-sm text-blue'>
              <img src={item.photo} alt='' className='rounded w-16' />
              <Link
                to={`/stars/${item.id}`}
                className='ml-2 lg:hover:text-[purple] dark:lg:hover:text-yellow ease-out duration-300 cursor-pointer'
              >
                {item.name}
              </Link>
            </div>
            <p className='text-sm'>{item.role}</p>
          </li>
        )
      })}
    </ul>
  )
}
