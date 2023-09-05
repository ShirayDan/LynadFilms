import { FC } from 'react'
import './StarCard.scss'

import { TCrew } from '../../data'

interface IStarCard {
  data: TCrew
}

export const StarCard: FC<IStarCard> = ({ data }) => {
  return (
    <div className='my-8 flex items-center flex-col bg-card sm:flex-row'>
      <img src={data.photo} alt='' className='star-card__photo' />
      <div className='p-4 flex items-center flex-col sm:py-2 sm:items-start'>
        <h2 className='font-bold text-lg text-white'>{data.name}</h2>
        <h3 className='text-sm text-grey mb-3 capitalize'>
          {data.role}, {data.country}
        </h3>
        <p className='text-sm text-grey'> {data.bio.slice(0, 150) + '...'}</p>
      </div>
    </div>
  )
}
