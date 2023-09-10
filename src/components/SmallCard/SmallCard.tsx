import { FC } from 'react'
import { Link } from 'react-router-dom'

import './SmallCard.scss'

import { TCrew, TFilms } from '../../data/types'

interface ISmallCard {
  data: TCrew | TFilms
  trailer?: boolean
}

export const SmallCard: FC<ISmallCard> = ({ data, trailer }) => {
  return (
    <div className={`flex pb-7 ${trailer && 'pb-1 py-1 p-2 mb-0 grid grid-cols-[56px_1fr] gap-2'}`}>
      <div className='mr-5 w-14'>
        {trailer ? (
          <img src={data.photo} alt='' className='rounded' />
        ) : (
          <Link to={`stars/${data.id}`} className='smallCard__img-cont'>
            <img src={data.photo} alt='' className='rounded ' />
          </Link>
        )}
      </div>
      <div className='flex flex-col justify-center flex-wrap'>
        <Link
          to={`stars/${data.id}`}
          className='text-white text-sm smallCard__title lg:hover:text-yellow ease-out duration-300 cursor-pointer'
        >
          {data.name}
        </Link>
        {/* <span className='text-grey uppercase text-xs'>{ data.role[0]}</span> */}
      </div>
    </div>
  )
}
