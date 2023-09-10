import { FC } from 'react'
import { Link } from 'react-router-dom'

import { TFilms } from '../../data/types'

import { FaStar } from 'react-icons/fa'

interface IFilmCard {
  data: TFilms
}

export const FilmCard: FC<IFilmCard> = ({ data }) => {
  console.log(data)

  return (
    <div className='mb-10 max-w-2xs mx-auto py-3 sm:flex sm:mb-0 sm:max-w-none'>
      <img src={data.photo} alt='' className='rounded mb-4 sm:max-w-3xs' />
      <div className='sm:ml-5'>
        <div className=''>
          <h3 className='mb-2.5 font-bold text-sm text-white uppercase lg:hover:text-yellow ease-out duration-300 cursor-pointer'>
            <Link to={`/films/${data.id}`}>
              {data.name} <span className='text-grey'>{`(2012)`}</span>
            </Link>
          </h3>
          <p className='flex mb-2 text-grey'>
            <FaStar fill='#f5b50a' className='mr-0.5 text-lg' />
            {data.rating}
          </p>
          <p className='pb-6 mb-6 border-0 border-solid border-b border-grey text-grey text-sm'>{data.desc}</p>
        </div>
        <ul className='text-sm text-grey'>
          <li className='mb'>Duration: {data.duration}</li>
          <li>MMPA: {data.mmpa}</li>
          <li>Release: {data.date}</li>
          <li>
            {' '}
            Director:{' '}
            {data.director.map((item) => {
              return (
                <Link to={`/stars/${item.id}`} className='text-blue'>
                  {item.name}{' '}
                </Link>
              )
            })}
          </li>
          <li>
            {' '}
            Stars:{' '}
            {data.stars.map((item) => {
              return (
                <Link to={`/stars/${item.id}`} className='text-blue'>
                  {item.name}{' '}
                </Link>
              )
            })}
          </li>
        </ul>
      </div>
    </div>
  )
}
