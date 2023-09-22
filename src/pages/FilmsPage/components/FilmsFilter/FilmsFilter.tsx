import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import './FilmsFilter.scss'

import { textAnimation } from '../../../../helpers/animations'

import { TFilmsFilter } from '../../../../redux/types'

const yearsOptions = [2020, 2010, 2000, 1990, 1980, 1970]

export const FilmsFilter: FC = () => {
  const { handleSubmit, register } = useForm<TFilmsFilter>()
  const { t } = useTranslation()

  const genresOptions = [
    t('sorting.comedies'),
    t('sorting.musicals'),
    t('sorting.adventures'),
    t('sorting.fiction'),
    t('sorting.sci')
  ]
  return (
    <motion.div
      custom={2}
      variants={textAnimation}
      className='border-3 border-solid border-header-border bg-filters-bg p-4 mb-10 lg:w-64'
    >
      <form className='flex flex-col' onSubmit={handleSubmit((data) => console.log(data))}>
        <label htmlFor='filmName' className='font-bold text-sm text-grey mb-2.5'>
          {t('sorting.movie name')}
        </label>
        <input
          type='text'
          id='filmName'
          placeholder={t('sorting.enter keywords')}
          className='bg-selects-bg py-1.5 px-3 h-10 text-sm mb-4'
          {...register('filmName')}
        />
        <label htmlFor='filmGenre' className='font-bold text-sm text-grey mb-2.5'>
          {t('sorting.genres')}
        </label>
        <select
          id='filmGenre'
          {...register('filmGenre')}
          className='bg-selects-bg text-grey text-sm font-light py-1.5 px-3 h-10 mb-4'
        >
          {genresOptions.map((item) => {
            return (
              <option key={item} value={item}>
                {item}
              </option>
            )
          })}
        </select>
        <label htmlFor='filmYear' className='font-bold text-sm text-grey mb-2.5'>
          {t('time.year')}
        </label>
        <select
          id='filmYear'
          {...register('filmYear')}
          className='bg-selects-bg text-sm font-light text-grey font-light py-1.5 px-3 h-10 mb-4'
        >
          {yearsOptions.map((item) => {
            return (
              <option key={item} value={item}>
                {item}
              </option>
            )
          })}
        </select>
        <label htmlFor='filmCountry' className='font-bold text-sm text-grey mb-2.5'>
          {t('sorting.country')}
        </label>
        <input
          type='text'
          id='filmCountry'
          placeholder={t('sorting.enter country')}
          className='bg-selects-bg py-1.5 px-3 h-10 text-sm mb-4'
          {...register('starCountry')}
        />
        <button
          type='submit'
          className='bg-red rounded py-3 uppercase text-sm font-bold text-[#fff] lg:hover:bg-yellow lg:hover:text-[#000] ease-out duration-300 cursor-pointer'
        >
          {t('sorting.submit')}
        </button>
      </form>
    </motion.div>
  )
}
