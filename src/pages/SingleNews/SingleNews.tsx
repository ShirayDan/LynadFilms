import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { SocialBlock } from '../../components/SocialBlock'
import { Comment } from './components/Comment'
import { AddComment } from './components/AddComment'

import { news } from '../../data/news'

export const SingleNews: FC = () => {
  const newsOne = news[0]
  const { t } = useTranslation()

  return (
    <div className='py-32 bg-main-bg text-grey '>
      <div className='container px-4 mx-auto'>
        <h1 className='text-3xl font-bold text-white mb-6 '>{newsOne.title}</h1>
        <p className='text-grey text-sm text-grey'>{newsOne.date}</p>
        <img src={newsOne.image} alt='' className='my-4 rounded' />
        <p className='leading-5 text-sm'>{newsOne.desc}</p>
        <div className='my-8 flex flex-col pb-8 border-0 border-b border-grey border-solid sm:flex-row sm:justify-between'>
          <div className='flex items-center'>
            <p className='mr-2 font-bold text-lg'>{t('singleNews.share it')}:</p> <SocialBlock />
          </div>
          <div className='flex items-center'>
            <p className='mr-2 font-bold text-lg'>{t('singleNews.tags')}:</p>{' '}
            {newsOne.tags.map((item, i, arr) => {
              return arr.length - 1 > i ? <span key={item}>{item + ', '}</span> : <span key={item}>{item}</span>
            })}
          </div>
        </div>
        <div>
          {newsOne.comments.map((item) => {
            return <Comment key={item.title} data={item} />
          })}
        </div>
        <div className='mt-10 pb-10'>
          <AddComment />
        </div>
      </div>
    </div>
  )
}
