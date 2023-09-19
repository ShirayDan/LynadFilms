import { FC } from 'react'
import { Link } from 'react-router-dom'

import { TCrew } from '../../../../../../data/types'

interface IMoreInfoItem {
  data: TCrew[]
  text: string
}

export const MoreInfoItem: FC<IMoreInfoItem> = ({ data, text }) => {
  return (
    <li className='flex justify-between font-bold text-sm py-3'>
      {text}
      <div className='text-blue font-normal'>
        {data.map((item, i, arr) => {
          return (
            <Link
              key={item.name}
              to={`/stars/${item.id}`}
              className='lg:hover:text-yellow ease-out duration-300 cursor-pointer'
            >
              {arr.length - 1 === i ? item.name : item.name + ' '}
            </Link>
          )
        })}
      </div>
    </li>
  )
}
