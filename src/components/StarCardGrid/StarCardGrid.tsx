import { FC } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './StarCardGrid.scss'

import { textAnimation } from '../../helpers/animations'

import { TCrew } from '../../data/types'

interface IStarCardGrid {
  data: TCrew
  i: number
}

export const StarCardGrid: FC<IStarCardGrid> = ({ data, i }) => {
  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      custom={i < 8 ? i : 2}
      variants={textAnimation}
      className='flex py-4 flex-col items-center sm:py-2'
    >
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
    </motion.div>
  )
}
