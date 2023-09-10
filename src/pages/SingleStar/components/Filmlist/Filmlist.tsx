import { FC } from 'react'
import './Filmlist.scss'

import { TFilmUser } from '../../../../data/types'

interface IFilmlist {
  data: TFilmUser[]
}

export const Filmlist: FC<IFilmlist> = ({ data }) => {
  return (
    <ul>
      {data.map((item) => {
        return (
          <li className='flex items-center py-3'>
            <img src={item.photo} alt='' className='rounded filmList__photo' />
            <div className='ml-4'>
              <h3 className='text-blue'>
                <a href='' className='lg:hover:text-yellow ease-out duration-300 cursor-pointer'>
                  {item.name}
                </a>{' '}
                <span className='text-grey'>({item.year})</span>
              </h3>
              <p>{item.role}</p>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
