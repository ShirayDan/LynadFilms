import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

import { Filmlist } from '../Filmlist'

import { TCrew } from '../../../../data/types'

interface IFilmography {
  data: TCrew
}

export const Filmography: FC<IFilmography> = ({ data }) => {
  const { t } = useTranslation()

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className='pb-10'>
      <h3 className='text-grey text-lg font-bold mb-1'>{t('singleStar.filmography')}</h3>
      <h2 className='text-2xl text-blue font-bold mb-8'>{data.name}</h2>
      <Filmlist data={data.movies} />
    </motion.div>
  )
}
