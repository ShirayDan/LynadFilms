import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { TCrew } from '../../../../data/types'

interface IBiography {
  data: TCrew
}

export const Biography: FC<IBiography> = ({ data }) => {
  const { t } = useTranslation()

  return (
    <div className='pb-10'>
      <h3 className='text-grey text-lg font-bold mb-1'>{t('singleStar.biography')}</h3>
      <h2 className='text-2xl text-blue font-bold mb-8'>{data.name}</h2>

      <div>
        <p>{data.bio}</p>
      </div>
    </div>
  )
}
