import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import './PlaceFilms.scss'

import { PlaceItem } from './components/PlaceItem'

import { films } from '../../../../data/films'

export const PlaceFilms: FC = () => {
  const { t } = useTranslation()

  const data = [
    { title: t('mainPage.films'), link: '/films', items: films },
    { title: t('mainPage.serial'), link: '/films', items: films }
  ]

  return (
    <div className='px-4 mx-auto max-w-screen-sm lg:mx-0 lg:max-w-2xl xl:max-w-4xl'>
      <div className='px-4'>
        {data.map((item) => {
          return <PlaceItem key={item.title} data={item} />
        })}
      </div>
    </div>
  )
}
