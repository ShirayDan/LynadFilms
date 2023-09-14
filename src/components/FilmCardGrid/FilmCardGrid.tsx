import { FC } from 'react'
import { Link } from 'react-router-dom'

import { TFilms } from '../../data/types'

import { FaStar } from 'react-icons/fa'

interface IFilmCard {
  data: TFilms
}

export const FilmCardGrid: FC<IFilmCard> = ({ data }) => {
  return (
    <div className='flex justify-center py-4 flex-col items-center sm:justify-start sm:py-2'>
      <img src={data.photo} alt='' className='max-w-3xs rounded' />
      <h3 className='text-grey mt-3 text-center font-bold lg:hover:text-[purple] dark:lg:hover:text-yellow ease-out duration-300 cursor-pointer'>
        <Link to={`/films/${data.id}`}> {data.name}</Link>
      </h3>
      <p className='flex my-2 text-grey'>
        <FaStar fill='#f5b50a' className='mr-0.5 text-lg' />
        {data.rating}
      </p>
    </div>
  )
}
