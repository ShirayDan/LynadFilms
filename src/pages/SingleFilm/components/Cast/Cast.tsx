import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

import { CastGroup } from './components/CastGroup'

import { TFilms } from '../../../../data/types'

interface IOverview {
  data: TFilms
}

export const Cast: FC<IOverview> = ({ data }) => {
  const { t } = useTranslation()

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className='pb-10'>
      <h3 className='text-grey text-lg font-bold mb-1'>{t('singleFilm.cast and crew')}</h3>
      <h2 className='text-2xl text-blue font-bold mb-8'>{data.name}</h2>

      <CastGroup text={t('singleFilm.directors')} data={data.director} />
      <CastGroup text={t('singleFilm.cast')} data={data.filmCrew} />
      <CastGroup text={t('singleFilm.actors')} data={data.stars} />
    </motion.div>
  )
}
