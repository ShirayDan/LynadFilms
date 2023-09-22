import { FC } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './NewsCard.scss'

import { textAnimation } from '../../helpers/animations'

import { TNews } from '../../data/types'

interface INewsCard {
  data: TNews
  i: number
}

export const NewsCard: FC<INewsCard> = ({ data, i }) => {
  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      custom={i < 3 ? i : 3}
      variants={textAnimation}
      className='flex flex-col mb-7 p-3 bg-news-card sm:flex-row'
    >
      <div className='flex justify-center mb-7 sm:mb-0'>
        <img src={data.image} alt='' className='rounded news-card__photo' />
      </div>
      <div className='sm:ml-4'>
        <h3 className='text-blue text-lg font-bold mb-4 sm:mb-2 lg:hover:text-[purple] dark:lg:hover:text-yellow ease-out duration-300 cursor-pointer'>
          <Link to={`/news/${data.id}`}> {data.title}</Link>
        </h3>
        <p className='text-grey text-sm mb-4 sm:mb-2'>{data.date}</p>
        <p className='text-grey text-sm'>{data.desc.slice(0, 100) + ' ...'}</p>
      </div>
    </motion.div>
  )
}
