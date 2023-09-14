import { FC } from 'react'

import { TComment } from '../../../../../../data/types'

import { FaStar } from 'react-icons/fa'

interface IComment {
  data: TComment
}

export const Comment: FC<IComment> = ({ data }) => {
  return (
    <div className='p-3 border-0 border-solid border-b border-grey'>
      <div className='flex mb-3'>
        <img src={data.user.userPhoto} alt='' className='w-10 h-10 rounded' />
        <div className='ml-3'>
          <div className='flex'>
            <h5 className='text-grey font-bold'>{data.title}</h5>
            <p className='flex mb-2 text-grey ml-3 text-sm'>
              <FaStar fill='#f5b50a' className='mr-0.5 text-lg' />
              {data.rating}
            </p>
          </div>
          <p className='text-grey text-sm'>
            {data.date} by <span className='text-blue'>{data.user.userName}</span>
          </p>
        </div>
      </div>
      <p className='text-grey text-sm'>{data.text}</p>
    </div>
  )
}
