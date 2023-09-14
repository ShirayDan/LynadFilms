import { FC } from 'react'

import { StarList } from './components/StarList'
import { StarFilter } from './components/StarFilter'

export const StarPage: FC = () => {
  return (
    <div className='pt-32 bg-main-bg'>
      <div className='container lg:flex mx-auto flex-row-reverse lg:justify-center'>
        <div className='px-4'>
          <StarFilter />
        </div>
        <div className='px-4'>
          <StarList />
        </div>
      </div>
    </div>
  )
}
