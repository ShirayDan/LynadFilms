import { FC } from 'react'
import { useTranslation } from 'react-i18next'

export const AddComment: FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <h4 className='text-white font-bold text-lg mb-7'>{t('singleNews.leave comment')}</h4>

      <form action=''>
        <textarea
          name='message'
          placeholder={t('singleNews.enter message')}
          id='message'
          className='border border-solid border-header-border rounded-sm text-grey bg-transparent p-4 mb-7 resize-none w-full h-28'
          // cols={30}
          // rows={10}
        ></textarea>
        <button
          type='submit'
          className='rounded-3xl text-[#fff] bg-red font-bold py-3.5 px-9 uppercase text-sm lg:hover:text-[#000] lg:hover:bg-yellow ease-out duration-300 cursor-pointer'
        >
          {t('singleNews.send')}
        </button>
      </form>
    </>
  )
}
