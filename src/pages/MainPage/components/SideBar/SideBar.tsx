import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import './SideBar.scss'

import { ViewAll } from '../../../../components/ViewAll'
import { SmallCard } from '../../../../components/SmallCard'

import { textAnimation } from '../../../../helpers/animations'

import img from '../../../../i/ads1.png'

import { crew } from '../../../../data/crew'

export const SideBar: FC = () => {
  const { t } = useTranslation()

  return (
    <motion.aside
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      custom={4}
      variants={textAnimation}
      className='px-4 mx-auto max-w-screen-sm lg:mx-0 lg:max-w-none'
    >
      <div className='px-4'>
        <div className='mb-10'>
          <img src={img} alt='' />
        </div>

        <h4 className='text-lg text-white uppercase font-bold mb-7 actor__title '>
          {t('mainPage.spotlight celebrities')}
        </h4>
        {crew.map((item, i) => {
          if (i > 3) {
            return
          }
          return <SmallCard key={item.name} data={item} i={i} />
        })}
        <ViewAll link='/stars' text={t('mainPage.see all celebrities')} />
      </div>
    </motion.aside>
  )
}
