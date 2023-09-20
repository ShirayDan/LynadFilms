import { FC } from 'react'
import { Link } from 'react-router-dom'
import './StarCardGrid.scss'

import { TCrew } from '../../data/types'

interface IStarCardGrid {
  data: TCrew
}

export const StarCardGrid: FC<IStarCardGrid> = ({ data }) => {
  return (
    <div className='flex py-4 flex-col items-center sm:py-2'>
      <img src={data.photo} alt='' className='star-card-grid__photo rounded mb-4 ' />
      <h2 className='font-bold text-xl text-white text-center lg:hover:text-[purple] dark:lg:hover:text-yellow ease-out duration-300 cursor-pointer'>
        <Link to={`/stars/${data.id}`}> {data.name}</Link>
      </h2>
      <h3 className='text-grey capitalize text-center'>
        {data.role.map((item, i, arr) => {
          return arr.length - 1 === i ? item : `${item} `
        })}
        , {data.country}
      </h3>
    </div>
  )
}
