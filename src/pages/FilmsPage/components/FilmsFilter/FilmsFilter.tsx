import { FC } from 'react'
import './FilmsFilter.scss'
import { useForm } from 'react-hook-form'

import { TFilmsFilter } from '../../../../redux/types'

const genresOptions = ['Comedies', 'Musicals', 'Adventures', 'Fiction', 'Sci-Fi']
const yearsOptions = [2020, 2010, 2000, 1990, 1980, 1970]

export const FilmsFilter: FC = () => {
  const { handleSubmit, register } = useForm<TFilmsFilter>()

  return (
    <div className='border-3 border-solid border-header-border bg-filters-bg p-4 mb-10 lg:w-64'>
      <form className='flex flex-col' onSubmit={handleSubmit((data) => console.log(data))}>
        <label htmlFor='filmName' className='font-bold text-sm text-grey mb-2.5'>
          Movie name
        </label>
        <input
          type='text'
          id='filmName'
          placeholder='Enter keywords'
          className='bg-selects-bg py-1.5 px-3 h-10 text-sm mb-4'
          {...register('filmName')}
        />
        <label htmlFor='filmGenre' className='font-bold text-sm text-grey mb-2.5'>
          Genres
        </label>
        <select
          id='filmGenre'
          {...register('filmGenre')}
          className='bg-selects-bg text-grey text-sm font-light py-1.5 px-3 h-10 mb-4'
        >
          {genresOptions.map((item) => {
            return <option value={item}>{item}</option>
          })}
        </select>
        <label htmlFor='filmYear' className='font-bold text-sm text-grey mb-2.5'>
          Year
        </label>
        <select
          id='filmYear'
          {...register('filmYear')}
          className='bg-selects-bg text-sm font-light text-grey font-light py-1.5 px-3 h-10 mb-4'
        >
          {yearsOptions.map((item) => {
            return <option value={item}>{item}</option>
          })}
        </select>
        <label htmlFor='filmCountry' className='font-bold text-sm text-grey mb-2.5'>
          Country
        </label>
        <input
          type='text'
          id='filmCountry'
          placeholder='Enter keywords'
          className='bg-selects-bg py-1.5 px-3 h-10 text-sm mb-4'
          {...register('starCountry')}
        />
        <button
          type='submit'
          className='bg-red rounded py-3 uppercase text-sm font-bold text-[#fff] lg:hover:bg-yellow lg:hover:text-[#000] ease-out duration-300 cursor-pointer'
        >
          Submit
        </button>
      </form>
    </div>
  )
}
