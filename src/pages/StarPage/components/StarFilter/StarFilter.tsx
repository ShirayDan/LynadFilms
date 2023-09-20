import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { TStarsFilter } from '../../../../redux/types'
import { useTranslation } from 'react-i18next'

const starsYears = [2020, 2010, 2000, 1990, 1980]

export const StarFilter: FC = () => {
  const { register, handleSubmit } = useForm<TStarsFilter>()
  const { t } = useTranslation()

  return (
    <div className='border-3 border-solid border-header-border bg-filters-bg p-4 mb-10 lg:w-64'>
      <form onSubmit={handleSubmit((data) => console.log(data))} className='flex flex-col'>
        <label htmlFor='starName' className='font-bold text-sm text-grey mb-2.5'>
          {t('sorting.celebrity name')}
        </label>
        <input
          type='text'
          id='starName'
          placeholder={t('sorting.enter keywords')}
          className='bg-selects-bg py-1.5 px-3 h-10 text-sm mb-4'
          {...register('starName')}
        />

        <label htmlFor='starYear' className='font-bold text-sm text-grey mb-2.5'>
          {t('time.year')}
        </label>
        <select
          id='starYear'
          {...register('starYear')}
          className='bg-selects-bg text-sm font-light text-grey font-light py-1.5 px-3 h-10 mb-4'
        >
          {starsYears.map((item) => {
            return (
              <option key={item} value={item}>
                {item}
              </option>
            )
          })}
        </select>
        <label htmlFor='starCountry' className='font-bold text-sm text-grey mb-2.5'>
          {t('sorting.country')}
        </label>
        <input
          type='text'
          id='starCountry'
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
    </div>
  )
}
