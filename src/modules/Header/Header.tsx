import { FC, useState } from 'react'
import './Header.scss'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { FaSearch } from 'react-icons/fa'
import { Modal } from '../../components/Modal'
import { SignInModal } from '../SignInModal'
import { SignUpModal } from '../SignUpModal'
import { Burger } from './components/Burger'
import { Language } from '../../components/Language'
import { Theme } from '../../components/Theme'
import { changeOverflow } from '../../helpers/helpers'

import logo from '../../i/logo1.png'

export const Header: FC = () => {
  const [signInModal, setSignInModal] = useState(false)
  const [signUpModal, setSignUpModal] = useState(false)

  const { t } = useTranslation()

  const handleOpenSignIn = () => {
    setSignInModal((state) => !state)
    changeOverflow(signInModal)
  }

  const handleOpenSignUp = () => {
    setSignUpModal((state) => !state)
    changeOverflow(signUpModal)
  }

  const links = [
    { link: '/films', text: t('header.movies') },
    { link: '/stars', text: t('header.celebrities') },
    { link: '/news', text: t('header.news') }
  ]

  return (
    <header className='header dark:bg-header-border  bg-[#aed2f6] absolute w-full dark:lg:bg-transparent'>
      <div className='container px-4 mx-auto'>
        <nav className='py-3 flex justify-between md:py-5'>
          <div className='flex items-center'>
            <div className='header_img-container'>
              <Link to={'/'}>
                <img src={logo} alt='logo' className='mt-1 header__logo' />
              </Link>
            </div>
            <ul className='hidden lg:flex'>
              {links.map((item) => {
                return (
                  <li key={item.text} className='ml-3 text-grey font-bold uppercase text-sm'>
                    <Link
                      to={item.link}
                      className='lg:hover:text-[purple] dark:lg:hover:text-yellow ease-out duration-300'
                    >
                      {item.text}
                    </Link>
                  </li>
                )
              })}
              <li className='ml-3 block flex items-center relative'>
                <Language textStyle='text-grey font-bold mr-2 uppercase text-sm' />
              </li>
              <li className='ml-1 block flex items-center relative'>
                <Theme textStyle='text-grey font-bold mr-2 uppercase text-sm' />
              </li>
            </ul>
          </div>
          <div className='flex items-center justify-center'>
            <Burger />

            <ul className='hidden lg:flex items-center '>
              <li
                className='ml-3 text-grey font-bold uppercase text-sm lg:hover:text-[purple] dark:lg:hover:text-yellow ease-out duration-300 cursor-pointer'
                onClick={() => handleOpenSignIn()}
              >
                {t('header.in')}
              </li>
              <li
                className='ml-3 text-[#fff] font-bold uppercase text-sm rounded-3xl bg-red py-3 px-5 lg:hover:bg-yellow lg:hover:text-[#000] ease-out duration-300 cursor-pointer'
                onClick={() => handleOpenSignUp()}
              >
                {t('header.up')}
              </li>
            </ul>
          </div>
        </nav>

        {/* added hidden for films page */}
        <div className=' hidden border-solid border-black border-4 md:block md:hidden'>
          <form action='' className='flex '>
            <input
              type='text'
              placeholder='Search for a movie, TV Show or celebrity that you are looking for'
              className='w-full bg-dark-blue text-grey py-1.5 px-3 h-10'
            />
            <button className='py-1.5 px-3 bg-dark-blue text-grey border-0 border-solid border-l-2 border-black flex items-center font-bold'>
              <FaSearch className='mr-2' /> Find
            </button>
          </form>
        </div>
      </div>

      {signInModal && <Modal children={<SignInModal />} handleClick={() => handleOpenSignIn()} />}
      {signUpModal && <Modal children={<SignUpModal />} handleClick={() => handleOpenSignUp()} />}
    </header>
  )
}
