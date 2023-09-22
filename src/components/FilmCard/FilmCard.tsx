import { FC } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

import { textAnimation } from '../../helpers/animations'

import { TFilms } from '../../data/types'

import { FaStar } from 'react-icons/fa'

interface IFilmCard {
  data: TFilms
  i: number
}

export const FilmCard: FC<IFilmCard> = ({ data, i }) => {
  const { t } = useTranslation()
  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      custom={i < 3 ? i : 3}
      variants={textAnimation}
      className='mb-10 max-w-2xs mx-auto py-3 sm:flex sm:mb-0 sm:max-w-none'
    >
      <img src={data.photo} alt='' className='rounded mb-4 sm:max-w-3xs' />
      <div className='sm:ml-5'>
        <div className=''>
          <h3 className='mb-2.5 font-bold text-sm text-white uppercase lg:hover:text-[purple] dark:lg:hover:text-yellow ease-out duration-300 cursor-pointer'>
            <Link to={`/films/${data.id}`}>
              {data.name} {` (2012)`}
            </Link>
          </h3>
          <p className='flex mb-2 text-grey'>
            <FaStar fill='#f5b50a' className='mr-0.5 text-lg' />
            {data.rating}
          </p>
          <p className='pb-6 mb-6 border-0 border-solid border-b border-grey text-grey text-sm'>{data.desc}</p>
        </div>
        <ul className='text-sm text-grey'>
          <li className='mb'>
            {t('singleFilm.run time')} {data.duration}
          </li>
          <li>MMPA: {data.mmpa}</li>
          <li>
            {t('filters.release date')}: {data.date}
          </li>
          <li>
            {t('singleFilm.director')}{' '}
            {data.director.map((item) => {
              return (
                <Link
                  key={item.name}
                  to={`/stars/${item.id}`}
                  className='text-blue lg:hover:text-[purple] dark:lg:hover:text-yellow ease-out duration-300 cursor-pointer'
                >
                  {item.name}{' '}
                </Link>
              )
            })}
          </li>
          <li className='capitalize'>
            {t('filters.stars')}:{' '}
            {data.stars.map((item, i, arr) => {
              return (
                <Link
                  key={item.name}
                  to={`/stars/${item.id}`}
                  className='text-blue lg:hover:text-[purple] dark:lg:hover:text-yellow ease-out duration-300 cursor-pointer'
                >
                  {arr.length - 1 === i ? item.name : `${item.name},`}{' '}
                </Link>
              )
            })}
          </li>
        </ul>
      </div>
    </motion.div>
  )
}
