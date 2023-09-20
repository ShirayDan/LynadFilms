import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { FaChevronDown } from 'react-icons/fa'

import logo from '../../i/logo1.png'

export const Footer: FC = () => {
  const { t } = useTranslation()

  const data = [
    {
      title: t('footer.resources'),
      items: [
        { text: t('footer.about'), link: '' },
        { text: t('footer.blockbuster'), link: '' },
        { text: t('footer.contact'), link: '' },
        { text: t('footer.forums'), link: '' },
        { text: t('footer.blog'), link: '' },
        { text: t('footer.help'), link: '' }
      ]
    },
    {
      title: t('footer.legal'),
      items: [
        { text: t('footer.terms'), link: '' },
        { text: t('footer.privacy'), link: '' },
        { text: t('footer.security'), link: '' }
      ]
    },
    {
      title: t('footer.account'),
      items: [
        { text: t('footer.my account'), link: '' },
        { text: t('footer.watchlist'), link: '' },
        { text: t('footer.collections'), link: '' },
        { text: t('footer.guide'), link: '' }
      ]
    }
  ]

  return (
    <footer className='dark:bg-slider bg-main-trailer px-5 py-20'>
      <div className='mx-auto max-w-screen-sm lg:max-w-screen-lg lg:px-5 xl:max-w-screen-xl'>
        <div className='sm:grid grid-cols-2 lg:grid-cols-4'>
          <div className='mb-4 flex flex-col items-center lg:items-start'>
            <img src={logo} alt='' className='mb-10' />
            <p className='text-grey text-sm mb-5'>
              {t('footer.address')}
              <br />
              {t('footer.new york')}, NY 10001{' '}
            </p>

            <p className='text-grey'>
              {t('footer.call')}{' '}
              <a className='text-white lg:hover:text-[purple] dark:lg:hover:text-yellow' href='tel:(+01) 202 342 6789'>
                (+01) 202 342 6789
              </a>
            </p>
          </div>

          {data.map((item) => {
            return (
              <div key={item.title} className='flex flex-col items-center'>
                <h4 className='mb-7 text-white font-bold'>{item.title}</h4>
                <ul className='mb-6'>
                  {item.items.map((item) => {
                    return (
                      <li key={item.text} className='mb-1.5 text-center'>
                        <a
                          className='text-grey text-sm lg:hover:text-[purple] dark:lg:hover:text-yellow ease-out duration-300 cursor-pointer'
                          href={item.link}
                        >
                          {item.text}
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </div>

        <div className='flex flex-col items-center'>
          <h4 className='mb-7 text-white font-bold'>{t('footer.newsletter')}</h4>
          <p className='text-grey text-sm mb-4'>{t('footer.bottomText')}</p>
          <form action='' className='grid grid-cols-2 mb-5 gap-3'>
            <input
              type='text'
              className='bg-transparent border-solid border-grey border text-xs text-grey rounded px-3 py-1.5  w-full'
              placeholder={t('footer.enter email')}
            />
            <button
              type='submit'
              className='text-red uppercase text-sm flex items-center w-full lg:hover:text-[purple] dark:lg:hover:text-yellow ease-out duration-300'
            >
              {t('footer.subscribe')} <FaChevronDown size='12px' className='-rotate-90 ml-1.5' />
            </button>
          </form>
        </div>
      </div>
    </footer>
  )
}
