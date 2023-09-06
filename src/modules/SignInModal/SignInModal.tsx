import { FC } from 'react'

import { FaTwitter } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'

export const SignInModal: FC = () => {
  return (
    <div className='w-300 bg-white p-7 md:w-430 md:p-10'>
      <h3 className=' text-4xl font-bold uppercase text-center text-dark-grey mb-4'>Log In</h3>
      <form action='' className='flex flex-col'>
        <label className='uppercase text-sm text-dark-grey font-bold mb-2' htmlFor='userName'>
          Your Name:
        </label>
        <input
          type='text'
          id='userName'
          className='text-sm border border-solid border-light-grey mb-3 md:mb-6 text-dark-grey font-bold px-3 py-1.5'
        />

        <label className='uppercase text-sm text-dark-grey font-bold mb-2' htmlFor='password'>
          Your Password
        </label>
        <input
          type='password'
          id='password'
          className='text-sm border border-solid border-light-grey mb-3 md:mb-6 text-dark-grey font-bold px-3 py-1.5'
        />
        <div className='flex justify-between mb-4 md:mb-6 font-medium'>
          <label htmlFor='remember' className='flex items-center'>
            <input type='checkbox' id='remember' className='mr-2 w-5 h-5' />
            Remember me
          </label>

          <a href=''>Forger password ?</a>
        </div>
        <button type='submit' className='bg-red text-white uppercase text-sm font-bold py-2 px-10'>
          Login
        </button>
        <p className='my-4 text-dark-grey text-sm'>Or via social</p>
        <div className='flex justify-between'>
          <button className='uppercase text-white font-bold py-3 px-3 md:px-8 bg-[#3a5a9a] flex rounded items-center'>
            <FaFacebookF className='mr-1.5' size='16px' />
            Facebook
          </button>
          <button className='uppercase text-white font-bold py-3 px-3 md:px-8 bg-[#00b9ef] flex rounded items-center'>
            <FaTwitter className='mr-1.5' size='16px' />
            Twitter
          </button>
        </div>
      </form>
    </div>
  )
}
