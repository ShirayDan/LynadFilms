import { FC } from 'react'
import { motion } from 'framer-motion'

import { textAnimation } from '../../helpers/animations'

import { NewsList } from './components/NewsList'
import { NewsSide } from './components/NewsSide'

export const NewsPage: FC = () => {
  return (
    <div className='pt-32 pb-10 bg-main-bg'>
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        variants={textAnimation}
        className='container lg:flex mx-auto flex-row lg:justify-center'
      >
        <div className='px-4 w-full'>
          {' '}
          <NewsList />{' '}
        </div>
        <div className='px-4'>
          <NewsSide />
        </div>
      </motion.div>
    </div>
  )
}
