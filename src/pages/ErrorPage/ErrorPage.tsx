import { FC } from 'react'
import { Link } from 'react-router-dom'

import logo from './../../i/logo1.png'
import errorImg from './../../i/err-img.png'

export const ErrorPage: FC = () => {
  return (
    <div className='bg-slider h-screen flex justify-center flex-col items-center'>
      <div className='mb-24'>
        <a href=''>
          <img src={logo} alt='' />
        </a>
      </div>
      <div>
        <img src={errorImg} alt='' />
      </div>
      <h1 className=' text-center text-white mt-8 mb-16 text-6xl'>Page not found</h1>

      <Link
        to='/'
        className='uppercase rounded-3xl bg-red text-white font-bold py-3 px-6 lg:hover:bg-yellow lg:hover:text-black ease-out duration-300 cursor-pointer'
      >
        Go home
      </Link>
    </div>
  )
}
