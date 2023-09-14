import { FC } from 'react'

import { TComment } from '../../../../data/types'

interface IComment {
  data: TComment
}

export const Comment: FC<IComment> = ({ data }) => {
  return (
    <div className='p-6 mt-7 bg-news-card flex flex-col sm:flex-row sm:justify-between items-center'>
      <img src={data.user.userPhoto} alt='' className='rounded-full mb-8 w-20 h-20' />
      <div className='flex items-start flex-col sm:ml-3'>
        <h6 className='text-white my-4'>
          {data.user.userName} <span className='text-grey text-sm'>- {data.date}</span>
        </h6>
        <p className='text-grey text-sm'>{data.text}</p>
      </div>
    </div>
  )
}
