import { FC } from 'react'
import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import { textAnimation } from '../../../../../../helpers/animations'

import { TFilms } from '../../../../../../data/types'

interface IMainSliderItem {
  data: TFilms
  i: number
}

export const MainSliderItem: FC<IMainSliderItem> = ({ data, i }) => {
  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      custom={i + 1}
      variants={i + 1 <= 4 ? textAnimation : {}}
      className='flex justify-center'
    >
      <div className='relative top-0 left-0'>
        {' '}
        <Link to={`/films/${data.id}`}>
          <img src={data.photo} alt='' className='rounded mainPage__img' />
        </Link>
        <div className='absolute bottom-3 left-3'>
          <div className='flex mb-2'>
            {data.tags.map((item) => {
              return (
                <div key={item} className='uppercase rounded bg-blue text-[#fff] text-xs p-1 font-bold mr-1'>
                  {item}
                </div>
              )
            })}
          </div>
          <Link to={`/films/${data.id}`} className='uppercase text-[#fff] font-bold'>
            {data.name}
          </Link>
          <p className='flex text-xs items-end text-[#fff] leading-4'>
            <FaStar fill='#f5b50a' className='mr-0.5 text-lg' />{' '}
            <span className='text-lg leading-4 mr-1'>{data.rating}</span>
          </p>
        </div>
      </div>
    </motion.div>
  )
}
