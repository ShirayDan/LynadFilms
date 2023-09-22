import { FC } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './SmallCard.scss'

import { textAnimation } from '../../helpers/animations'

import { TCrew, TFilms } from '../../data/types'

interface ISmallCard {
  data: TCrew | TFilms
  trailer?: boolean
  i?: number
}

export const SmallCard: FC<ISmallCard> = ({ data, trailer, i }) => {
  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      custom={i ? i + 4 : 0}
      variants={i && i + 1 <= 4 ? textAnimation : {}}
      className={`flex pb-7 ${trailer && 'pb-1 py-1 p-2 mb-0 grid grid-cols-[56px_1fr] gap-2'}`}
    >
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
          to={`${trailer ? 'films' : 'stars'}/${data.id}`}
          className='text-white text-sm smallCard__title lg:hover:text-[purple] dark:lg:hover:text-yellow ease-out duration-300 cursor-pointer'
        >
          {data.name}
        </Link>
      </div>
    </motion.div>
  )
}
