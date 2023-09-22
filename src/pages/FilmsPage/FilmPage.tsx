import { FC } from 'react'
import { motion } from 'framer-motion'

import { textAnimation } from '../../helpers/animations'

import { FilmsFilter } from './components/FilmsFilter'
import { FilmsList } from './components/FilmsList'

export const FilmPage: FC = () => {
  return (
    <div className='pt-32 bg-main-bg'>
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        variants={textAnimation}
        className='container lg:flex mx-auto flex-row-reverse lg:justify-center'
      >
        <div className='px-4'>
          <FilmsFilter />
        </div>
        <div className='px-4'>
          <FilmsList />
        </div>
      </motion.div>
    </div>
  )
}
