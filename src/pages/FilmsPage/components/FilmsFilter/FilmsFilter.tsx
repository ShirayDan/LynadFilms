import { FC } from 'react'
import './FilmsFilter.scss'

export const FilmsFilter: FC = () => {
  return (
    <div className='border-3 border-solid border-header-border bg-filters-bg p-4 mb-10 lg:w-64'>
      <form action='' className='flex flex-col '>
        <label htmlFor='filmName' className='font-bold text-sm text-grey mb-2.5'>
          Movie name
        </label>
        <input
          type='text'
          id='filmName'
          placeholder='Enter keywords'
          className='bg-selects-bg py-1.5 px-3 h-10 text-sm mb-4'
        />
        <label htmlFor='filmGenre' className='font-bold text-sm text-grey mb-2.5'>
          Genres
        </label>
        <select name='filmGenre' className='bg-selects-bg text-grey text-sm font-light py-1.5 px-3 h-10 mb-4'>
          <option value='type-1'>Type 1</option>
          <option value='type-2'>Type 2</option>
          <option value='type-3'>Type 3</option>
          <option value='type-4'>Type 4</option>
          <option value='type-5'>Type 5</option>
        </select>
        <label htmlFor='filmYear' className='font-bold text-sm text-grey mb-2.5'>
          Year
        </label>
        <select name='filmYear' className='bg-selects-bg text-sm font-light text-grey font-light py-1.5 px-3 h-10 mb-4'>
          <option value='type-1'>Type 1</option>
          <option value='type-2'>Type 2</option>
          <option value='type-3'>Type 3</option>
          <option value='type-4'>Type 4</option>
          <option value='type-5'>Type 5</option>
        </select>
        <label htmlFor='filmCountry' className='font-bold text-sm text-grey mb-2.5'>
          Country
        </label>
        <input
          type='text'
          id='filmCountry'
          placeholder='Enter keywords'
          className='bg-selects-bg py-1.5 px-3 h-10 text-sm mb-4'
        />
        {/* <select
					name='filmCountry'
					className='bg-selects-bg text-grey text-sm font-light py-1.5 px-3 h-10 mb-4'>
					<option value='type-1'>Type 1</option>
					<option value='type-2'>Type 2</option>
					<option value='type-3'>Type 3</option>
					<option value='type-4'>Type 4</option>
					<option value='type-5'>Type 5</option>
				</select> */}
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
