import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'

import { TSignIn } from '../../redux/types'

import { FaTwitter } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'

export const SignInModal: FC = () => {
  const { register, handleSubmit } = useForm<TSignIn>()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='w-300 bg-white p-7 md:w-430 md:p-10'
    >
      <h3 className=' text-4xl font-bold uppercase text-center text-dark-grey mb-4'>Log In</h3>
      <form className='flex flex-col' onSubmit={handleSubmit((data) => console.log(data))}>
        <label className='uppercase text-sm text-dark-grey font-bold mb-2' htmlFor='userEmail'>
          Your Email:
        </label>
        <input
          type='email'
          id='userEmail'
          className='text-sm border border-solid border-light-grey mb-3 md:mb-6 text-[#000] font-bold px-3 py-1.5'
          {...register('userEmail')}
        />

        <label className='uppercase text-sm text-dark-grey font-bold mb-2' htmlFor='userPassword'>
          Your Password
        </label>
        <input
          type='password'
          id='userPassword'
          className='text-sm border border-solid border-light-grey mb-3 md:mb-6 text-[#000] font-bold px-3 py-1.5'
          {...register('userPassword')}
        />
        <div className='flex justify-between mb-4 md:mb-6 font-medium'>
          <label htmlFor='remember' className='flex items-center text-black cursor-pointer'>
            <input type='checkbox' id='remember' className='mr-2 w-5 h-5' />
            Remember me
          </label>

          <a href='' className='text-black lg:hover:text-[purple] dark:lg:hover:text-yellow ease-out duration-300'>
            Forger password ?
          </a>
        </div>
        <button
          type='submit'
          className='bg-red text-[#fff] uppercase text-sm font-bold py-2 px-10 lg:hover:bg-yellow lg:hover:text-[#000] ease-out duration-300 cursor-pointer'
        >
          Login
        </button>
        <p className='my-4 text-dark-grey text-sm'>Or via social</p>
        <div className='flex justify-between'>
          <button className='uppercase text-[#fff] font-bold py-3 px-3 md:px-8 bg-[#3a5a9a] flex rounded items-center'>
            <FaFacebookF className='mr-1.5' size='16px' />
            Facebook
          </button>
          <button className='uppercase text-[#fff] font-bold py-3 px-3 md:px-8 bg-[#00b9ef] flex rounded items-center'>
            <FaTwitter className='mr-1.5' size='16px' />
            Twitter
          </button>
        </div>
      </form>
    </motion.div>
  )
}
