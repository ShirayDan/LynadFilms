import { FC, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

import { textAnimation } from '../../../../helpers/animations'

import { NewsCard } from '../../../../components/NewsCard'
import { NewsCardGrid } from '../../../../components/NewsCardGrid'

import { BsFillGrid3X3GapFill, BsListUl } from 'react-icons/bs'

import { news } from '../../../../data/news'

export const NewsList: FC = () => {
  const [typeCard, setTypeCard] = useState('list')
  const { t } = useTranslation()

  return (
    <motion.div custom={1} variants={textAnimation} className='text-white'>
      <div className='pb-4'>
        <div className='border-0  border-y border-grey border-solid sm:flex items-center justify-between py-2'>
          <p className='text-grey text-sm mb-2 sm:mb-0'>
            {t('filters.found')} {news.length} {t('filters.news')} {t('filters.total')}
          </p>
          <div className='flex justify-between items-center'>
            <div className=' flex justify-between items-center wrap'>
              <label htmlFor='filmSorting' className='text-grey text-sm mr-2'>
                {t('filters.sort')}
              </label>
              <select id='filmSorting' className='text-grey bg-selects-bg text-sm font-light py-1.5 px-3'>
                <option value=''>
                  {t('filters.rating')} {t('filters.descending')}
                </option>
                <option value=''>
                  {t('filters.rating')} {t('filters.ascending')}
                </option>
                <option value=''>
                  {t('filters.release date')} {t('filters.descending')}
                </option>
                <option value=''>
                  {t('filters.release date')} {t('filters.ascending')}
                </option>
              </select>
            </div>
            <div className='flex px-2'>
              <BsFillGrid3X3GapFill
                className='mr-2 text-grey lg:hover:text-[purple] dark:lg:hover:text-yellow ease-out duration-300 cursor-pointer'
                onClick={() => setTypeCard('grid')}
              />
              <BsListUl
                size={'18px'}
                className='text-grey lg:hover:text-[purple] dark:lg:hover:text-yellow ease-out duration-300 cursor-pointer'
                onClick={() => setTypeCard('list')}
              />
            </div>
          </div>
        </div>
      </div>
      {typeCard === 'list' &&
        news.map((item, i) => {
          return <NewsCard key={item.title} data={item} i={i} />
        })}
      {typeCard === 'grid' && (
        <div className='grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 '>
          {news.map((item, i) => {
            return <NewsCardGrid key={item.title} data={item} i={i} />
          })}
        </div>
      )}
    </motion.div>
  )
}
