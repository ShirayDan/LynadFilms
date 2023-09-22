import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import { textAnimation } from '../../../../helpers/animations'

import { ViewAll } from '../../../../components/ViewAll'

import img from '../../../../i/blog-it1.jpg'

const news = [
  {
    text: 'Michael Shannon Frontrunner to play Cable in “Deadpool 2”',
    data: '13 hours ago'
  },
  {
    text: 'French cannibal horror “Raw” inspires L.A. theater to hand out “Barf Bags”',
    data: '13 hours ago'
  },
  {
    text: 'Laura Dern in talks to join Justin Kelly’s biopic “JT Leroy”',
    data: '13 hours ago'
  },
  {
    text: 'China punishes more than 300 cinemas for box office cheating',
    data: '13 hours ago'
  }
]

export const NewsBlock: FC = () => {
  const { t } = useTranslation()

  const hastags = [t('header.movies'), t('mainPage.show'), t('mainPage.celebs')]

  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      variants={textAnimation}
      className='px-4 py-10 mx-auto max-w-screen-sm lg:max-w-screen-lg xl:max-w-screen-xl'
    >
      <div className='px-4'>
        <h2 className='text-xl mb-6 text-white font-bold uppercase'>{t('mainPage.latest news')}</h2>
        <div>
          <ul className='flex '>
            {hastags.map((item, i) => {
              return (
                <motion.li key={item} custom={i + 3} variants={textAnimation} className='mr-2'>
                  <a
                    href=''
                    className='text-white uppercase text-sm text-grey font-bold lg:hover:text-[purple] dark:lg:hover:text-yellow ease-out duration-300'
                  >
                    #{item}
                  </a>
                </motion.li>
              )
            })}
          </ul>
        </div>
        <div className='lg:grid lg:grid-cols-trailer '>
          <div className='flex flex-col py-5 px-2 '>
            <img src={img} alt='' className='rounded max-w-sm flex self-center' />

            <h3 className='text-blue text-lg mb-5 mt-7'>Tab 3</h3>
            <p className='text-sm text-grey'>13 hours ago</p>
            <p className='text-sm text-grey mt-5'>
              Exclusive: Amazon Studios has acquired Victoria Woodhull, with Oscar winning Room star Brie Larson polsed
              to produce, and play the first female candidate for the presidency of the United States. Amazon bought it
              in a pitch package deal. Ben Kopit, who wrote the Warner Bros film Libertine that has...
            </p>
          </div>

          <motion.div custom={2} variants={textAnimation} className='mt-10 lg:mt-0'>
            <div className='flex justify-between mb-6'>
              <h3 className='text-white font-bold text-lg '>{t('mainPage.More news')} Blockbuster</h3>
              <ViewAll text={t('mainPage.all news')} link='/news' />
            </div>
            {news.map((item, i) => {
              return (
                <motion.div custom={i + 3} variants={textAnimation} key={item.text} className='flex flex-col mb-7 pr-4'>
                  <h6 className='text-blue text-sm font-bold mb-1 lg:hover:text-[purple] dark:lg:hover:text-yellow ease-out duration-300 cursor-pointer'>
                    <Link to={''}>{item.text}</Link>
                  </h6>
                  <span className='text-grey text-xs'>{item.data}</span>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
