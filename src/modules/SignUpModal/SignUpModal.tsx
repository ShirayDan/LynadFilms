import { FC } from 'react'

export const SignUpModal: FC = () => {
  return (
    <div className=' w-300 bg-white p-7 md:w-430 md:p-10'>
      <h3 className=' text-4xl font-bold uppercase text-center text-dark-grey mb-4 md:mb-10'>Sign Up</h3>
      <form action='' className='flex flex-col'>
        <label className='uppercase text-sm text-dark-grey font-bold mb-2' htmlFor='userName'>
          Your Name:
        </label>
        <input
          type='text'
          id='userName'
          className='text-sm border border-solid border-light-grey mb-3 md:mb-6 text-[#000] font-bold px-3 py-1.5'
        />
        <label className='uppercase text-sm text-dark-grey font-bold mb-2' htmlFor='email'>
          Your Email:
        </label>
        <input
          type='email'
          id='email'
          className='text-sm border border-solid border-light-grey mb-3 md:mb-6 text-[#000] font-bold px-3 py-1.5'
        />
        <label className='uppercase text-sm text-dark-grey font-bold mb-2' htmlFor='password'>
          Your Password
        </label>
        <input
          type='password'
          id='password'
          className='text-sm border border-solid border-light-grey mb-3 md:mb-6 text-[#000] font-bold px-3 py-1.5'
        />
        <label className='uppercase text-sm text-dark-grey font-bold mb-2' htmlFor='passwordRepeat'>
          Repeat Your Password
        </label>
        <input
          type='password'
          id='passwordRepeat'
          className='text-sm border border-solid border-light-grey mb-3 md:mb-6 text-[#000] font-bold px-3 py-1.5'
        />

        <button
          type='submit'
          className='bg-red text-[#fff] uppercase text-sm font-bold py-2 px-10 lg:hover:bg-yellow lg:hover:text-[#000] ease-out duration-300 cursor-pointer'
        >
          Sign up
        </button>
      </form>
    </div>
  )
}
