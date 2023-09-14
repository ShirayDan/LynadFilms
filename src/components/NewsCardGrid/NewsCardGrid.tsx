import { FC } from 'react'
import { Link } from 'react-router-dom'

import { TNews } from '../../data/types'

interface INewsCardGrid {
  data: TNews
}

export const NewsCardGrid: FC<INewsCardGrid> = ({ data }) => {
  return (
    <div className='flex flex-col mb-7 p-3 bg-news-card'>
      <div className='flex justify-center mb-7'>
        <img src={data.image} alt='' className='rounded' />
      </div>
      <h3 className='text-blue text-lg font-bold mb-4 lg:hover:text-[purple] dark:lg:hover:text-yellow ease-out duration-300 cursor-pointer'>
        <Link to={`/news/${data.id}`}> {data.title}</Link>
      </h3>
      <p className='text-grey text-sm mb-4'>{data.date}</p>
      <p className='text-grey text-sm'>{data.desc.slice(0, 100) + ' ...'}</p>
    </div>
  )
}
