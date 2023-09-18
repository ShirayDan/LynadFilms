import { FC } from 'react'
import { Link } from 'react-router-dom'

import img from '../../../../i/crew1-1.jpg'

const buttons = ['Profile', 'Favorite Movies']

interface IUserInfo {
  page: number
  changePage: (page: number) => void
}

export const UserInfo: FC<IUserInfo> = ({ page, changePage }) => {
  return (
    <div className='px-3 lg:pl-0'>
      <div className='border-3 border-solid border-header-border bg-transparent mb-10 text-white'>
        <div className='p-6 flex items-center flex-col border-0 border-solid border-b-2 border-header-border'>
          <img src={img} alt='' className='w-28 h-28 rounded-full mb-4' />
          <button className='rounded-md text-[#fff] bg-red font-bold py-3.5 px-6 uppercase text-sm lg:hover:text-[#000] lg:hover:bg-yellow ease-out duration-300 cursor-pointer '>
            Change avatar
          </button>
        </div>
        <div className='py-6 px-4 border-0 border-solid border-b-2 border-header-border'>
          <h3 className='mb-3'>Account Details</h3>

          <ul>
            {buttons.map((item, i) => {
              return (
                <li
                  onClick={() => changePage(i)}
                  className={`text-sm uppercase mb-4 font-bold dark:lg:hover:text-yellow lg:hover:text-[purple] ease-out duration-300 cursor-pointer ${
                    page === i && 'text-[purple] dark:text-yellow'
                  }  `}
                >
                  {item}
                </li>
              )
            })}
          </ul>
        </div>
        <div className='py-6 px-4'>
          <h3 className='mb-3'>Others</h3>

          <Link
            to='/'
            className='text-sm uppercase mb-4 font-bold dark:lg:hover:text-yellow lg:hover:text-[purple] ease-out duration-300'
          >
            Log out
          </Link>
        </div>
      </div>
    </div>
  )
}
