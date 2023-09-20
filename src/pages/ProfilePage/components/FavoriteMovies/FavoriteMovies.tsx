import { FC, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { FilmCard } from '../../../../components/FilmCard'
import { FilmCardGrid } from '../../../../components/FilmCardGrid'

import { BsFillGrid3X3GapFill, BsListUl } from 'react-icons/bs'

import { films } from '../../../../data/films'

export const FavoriteMovies: FC = () => {
  const [typeCard, setTypeCard] = useState('grid')
  const { t } = useTranslation()

  return (
    <div className='pb-20'>
      <div className='pb-4'>
        <div className='border-0 border-y border-grey border-solid sm:flex items-center justify-between py-2'>
          <p className='text-grey text-sm mb-2 sm:mb-0'>
            {t('filters.found')} {films.length} {t('filters.movies')} {t('filters.total')}
          </p>
          <div className='flex justify-between items-center'>
            <div className=' flex justify-between items-center wrap'>
              <label htmlFor='filmSorting' className='text-grey text-sm mr-2'>
                Sort by:
              </label>
              <select name='filmSorting' id='' className='text-grey bg-selects-bg text-sm font-light py-1.5 px-3'>
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
        films.map((item) => {
          return <FilmCard key={item.name} data={item} />
        })}

      {typeCard === 'grid' && (
        <div className='grid grid-cols-1 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5'>
          {films.map((item) => {
            return <FilmCardGrid key={item.name} data={item} />
          })}
        </div>
      )}
    </div>
  )
}
