import { FC } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './StarCard.scss'

import { textAnimation } from '../../helpers/animations'

import { TCrew } from '../../data/types'

interface IStarCard {
  data: TCrew
  i: number
}

export const StarCard: FC<IStarCard> = ({ data, i }) => {
  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      custom={i < 3 ? i : 3}
      variants={textAnimation}
      className='my-8 flex items-center flex-col bg-card sm:flex-row'
    >
      <img src={data.photo} alt='' className='star-card__photo' />
      <div className='p-4 flex items-center flex-col sm:py-2 sm:items-start'>
        <h2 className='font-bold text-lg text-white lg:hover:text-[purple] dark:lg:hover:text-yellow ease-out duration-300 cursor-pointer'>
          <Link to={`/stars/${data.id}`}> {data.name}</Link>
        </h2>
        <h3 className='text-sm text-grey mb-3 capitalize'>
          {data.role}, {data.country}
        </h3>
        <p className='text-sm text-grey'> {data.bio.slice(0, 150) + '...'}</p>
      </div>
    </motion.div>
  )
}
