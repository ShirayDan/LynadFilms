import { FC } from 'react'

import { NewsList } from './components/NewsList'
import { NewsSide } from './components/NewsSide'

export const NewsPage: FC = () => {
  return (
    <div className='pt-32 pb-10 bg-[#020d18]'>
      <div className='container lg:flex mx-auto flex-row lg:justify-center'>
        <div className='px-4 w-full'>
          {' '}
          <NewsList />{' '}
        </div>
        <div className='px-4'>
          <NewsSide />
        </div>
      </div>
    </div>
  )
}
