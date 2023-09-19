import { FC } from 'react'
import { useForm } from 'react-hook-form'

import { TNewsSearch } from '../../../../redux/types'

import { news } from '../../../../data/news'

export const NewsSide: FC = () => {
  const { register, handleSubmit } = useForm<TNewsSearch>()

  return (
    <aside className='lg:w-64'>
      <div className='mb-10'>
        <h4 className='border-0 border-b border-solid border-grey uppercase text-white font-bold pb-4 mb-7 text-lg'>
          Search
        </h4>
        <form onSubmit={handleSubmit((data) => console.log(data))} className='flex flex-col'>
          <label htmlFor='newsTitle' className='font-bold text-sm text-grey mb-2.5'>
            News title
          </label>

          <input
            type='text'
            id='newsTitle'
            placeholder='Enter keywords'
            className='bg-selects-bg py-1.5 px-3 h-10 text-sm mb-4 rounded'
            {...register('newsTitle')}
          />
          <button
            type='submit'
            className='bg-red rounded py-3 uppercase text-sm font-bold text-[#fff] lg:hover:bg-yellow lg:hover:text-[#000] ease-out duration-300 cursor-pointer'
          >
            Submit
          </button>
        </form>
      </div>
      <div className='mb-10'>
        <h4 className='border-0 border-b border-solid border-grey uppercase text-white font-bold pb-4 mb-7 text-lg'>
          Categories
        </h4>
        <ul>
          <li className='text-grey text-sm mb-4'>Awards (50)</li>
          <li className='text-grey text-sm mb-4'>Box office (38)</li>
          <li className='text-grey text-sm mb-4'>Film reviews (72)</li>
          <li className='text-grey text-sm mb-4'>News (45)</li>
          <li className='text-grey text-sm mb-4'>Global (06)</li>
        </ul>
      </div>
      <div className='pb-10'>
        <h4 className='border-0 border-b border-solid border-grey uppercase text-white font-bold pb-4 mb-7 text-lg'>
          Most Popular
        </h4>
        <ul>
          {news.map((item, i) => {
            if (i < 3) {
              return (
                <li key={item.title} className='text-white flex mb-4 items-center'>
                  <img src={item.image} alt='' className='w-28' />
                  <a href='' className='ml-2 text-blue text-sm'>
                    {' '}
                    {item.title}
                  </a>
                </li>
              )
            }
          })}
        </ul>
      </div>
    </aside>
  )
}
