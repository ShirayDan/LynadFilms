import { FC } from 'react'

import { Comment } from './components/Comment'

import { TFilms } from '../../../../data'

interface IReviews {
  data: TFilms
}

export const Reviews: FC<IReviews> = ({ data }) => {
  return (
    <div className='pb-10'>
      <h3 className='text-grey text-lg font-bold mb-1'>Reviews of </h3>
      <div className='md:flex justify-between items-center'>
        <h2 className='text-2xl text-blue font-bold mb-8'>{data.name}</h2>

        <button className='rounded-3xl text-white bg-red py-4 px-6 uppercase font-bold mb-7 text-sm'>
          Write review
        </button>
      </div>
      <div className='pb-4'>
        <div className='border-0  border-y border-grey border-solid sm:flex items-center justify-between pt-2'>
          <p className='text-grey text-sm mb-2 '>Found 1608 reviews in total</p>
          <div className=' flex justify-between items-center wrap pb-2'>
            <label htmlFor='filmSorting' className='text-grey text-sm mr-2'>
              Sort by:
            </label>
            <select name='filmSorting' id='' className='text-grey bg-[#233a50] text-sm font-light py-1.5 px-3'>
              <option value=''>Rating Descending</option>
              <option value=''>Rating Ascending</option>
              <option value=''>Release date Descending</option>
              <option value=''>Release date Ascending</option>
            </select>
          </div>
        </div>
      </div>
      <div>
        {data.comments.map((item) => {
          return <Comment data={item} />
        })}
      </div>
      <div className='pb-4'>
        <div className='border-0 border-b border-grey border-solid sm:flex items-center justify-between py-2'>
          <div className=' flex justify-between items-center wrap pb-2'>
            <label htmlFor='filmSorting' className='text-grey text-sm mr-2'>
              Reviews per page:
            </label>
            <select name='filmSorting' id='' className='text-grey bg-[#233a50] text-sm font-light py-1.5 px-3'>
              <option value=''>5 comments</option>
              <option value=''>10 comments</option>
            </select>
          </div>

          <div className='flex '>
            Page 1 of 6:
            <ul className='flex ml-3'>
              {Array(6)
                .fill(0)
                .map((_, i) => {
                  return <li className='text-blue px-1'>{++i}</li>
                })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
