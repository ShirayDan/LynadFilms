import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { Comment } from './components/Comment'

import { TFilms } from '../../../../data/types'

interface IReviews {
  data: TFilms
}

export const Reviews: FC<IReviews> = ({ data }) => {
  const { t } = useTranslation()

  return (
    <div className='pb-10'>
      <h3 className='text-grey text-lg font-bold mb-1'>
        {t('singleFilm.reviews')} {t('singleFilm.of')}
      </h3>
      <div className='md:flex justify-between items-center'>
        <h2 className='text-2xl text-blue font-bold mb-8'>{data.name}</h2>

        <button className='rounded-3xl text-[#fff] bg-red py-4 px-6 uppercase font-bold mb-7 text-sm lg:hover:bg-yellow lg:hover:text-[#000] ease-out duration-300 cursor-pointer'>
          Write review
        </button>
      </div>
      <div className='pb-4'>
        <div className='border-0  border-y border-grey border-solid sm:flex items-center justify-between pt-2'>
          <p className='text-grey text-sm mb-2 '>
            {t('filters.found')} 1608 {t('singleFilm.reviews')} {t('filters.total')}
          </p>
          <div className=' flex justify-between items-center wrap pb-2'>
            <label htmlFor='filmSorting' className='text-grey text-sm mr-2'>
              {t('filters.sort')}
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
        </div>
      </div>
      <div>
        {data.comments.map((item) => {
          return <Comment key={item.text} data={item} />
        })}
      </div>
      <div className='pb-4'>
        <div className='border-0 border-b border-grey border-solid sm:flex items-center justify-between py-2'>
          <div className=' flex justify-between items-center wrap pb-2'>
            <label htmlFor='filmSorting' className='text-grey text-sm mr-2'>
              {t('singleFilm.reviews')} {t('singleFilm.per page')}:
            </label>
            <select name='filmSorting' id='' className='text-grey bg-selects-bg text-sm font-light py-1.5 px-3'>
              <option value=''>5 {t('singleFilm.comments')}</option>
              <option value=''>10 {t('singleFilm.comments')}</option>
            </select>
          </div>

          <div className='flex '>
            {t('singleFilm.page')} 1 {t('singleFilm.of2')} 6:
            <ul className='flex ml-3'>
              {Array(6)
                .fill(0)
                .map((_, i) => {
                  return (
                    <li key={i} className='text-blue px-1'>
                      {++i}
                    </li>
                  )
                })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
