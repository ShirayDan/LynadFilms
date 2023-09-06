import { FC } from 'react'

import { NewsList } from './components/NewsList'
import { NewsSide } from './components/NewsSide'

export const NewsPage: FC = () => {
  return (
    <div className='pt-32 bg-[#020d18]'>
      <div className='container lg:flex mx-auto flex-row-reverse lg:justify-center'>
        <div className='px-4'>
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
