import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'

import { TSignUp } from '../../redux/types'

export const SignUpModal: FC = () => {
  const { register, handleSubmit } = useForm<TSignUp>()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className=' w-300 bg-white p-7 md:w-430 md:p-10'
    >
      <h3 className=' text-4xl font-bold uppercase text-center text-dark-grey mb-4 md:mb-10'>Sign Up</h3>
      <form className='flex flex-col' onSubmit={handleSubmit((data) => console.log(data))}>
        <label className='uppercase text-sm text-dark-grey font-bold mb-2' htmlFor='userName'>
          Your Username:
        </label>
        <input
          type='text'
          id='userName'
          className='text-sm border border-solid border-light-grey mb-3 md:mb-6 text-[#000] font-bold px-3 py-1.5'
          {...register('userName')}
        />
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
        <label className='uppercase text-sm text-dark-grey font-bold mb-2' htmlFor='userConfirmPassword'>
          Repeat Your Password
        </label>
        <input
          type='password'
          id='userConfirmPassword'
          className='text-sm border border-solid border-light-grey mb-3 md:mb-6 text-[#000] font-bold px-3 py-1.5'
          {...register('userConfirmPassword')}
        />

        <button
          type='submit'
          className='bg-red text-[#fff] uppercase text-sm font-bold py-2 px-10 lg:hover:bg-yellow lg:hover:text-[#000] ease-out duration-300 cursor-pointer'
        >
          Sign up
        </button>
      </form>
    </motion.div>
  )
}
