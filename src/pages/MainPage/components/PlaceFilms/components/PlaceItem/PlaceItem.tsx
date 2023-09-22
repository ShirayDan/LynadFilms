import { FC } from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import 'swiper/css'
import 'swiper/css/pagination'
import './PlaceItem.scss'

import { textAnimation } from '../../../../../../helpers/animations'

import { ViewAll } from '../../../../../../components/ViewAll'

import { TFilms } from '../../../../../../data/types'

interface IPlaceItem {
  data: {
    title: string
    link: string
    items: TFilms[]
  }
}

export const PlaceItem: FC<IPlaceItem> = ({ data }) => {
  const { t } = useTranslation()

  const hashtags = [
    t('mainPage.popular'),
    t('mainPage.coming soon'),
    t('mainPage.top rated'),
    t('mainPage.most reviewed')
  ]

  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      custom={1}
      variants={textAnimation}
      className='mb-10'
    >
      <div className='flex justify-between items-center mb-6'>
        <h2 className='text-white text-2xl uppercase font-bold'>{data.title}</h2>
        <ViewAll link={data.link} text={t('mainPage.view all')} />
      </div>
      <ul className='md:flex'>
        {hashtags.map((item, i) => {
          return (
            <motion.li
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              custom={i + 2}
              variants={textAnimation}
              key={item}
              className='text-grey uppercase mb-4 text-sm font-bold md:mr-2 lg:hover:text-[purple] dark:lg:hover:text-yellow ease-out duration-300 cursor-pointer'
            >
              #{item}
            </motion.li>
          )
        })}
      </ul>

      <Swiper
        pagination={{
          clickable: true
        }}
        loop={true}
        slidesPerView={1}
        breakpoints={{
          600: {
            slidesPerView: 2
          },
          768: {
            slidesPerView: 3
          },
          1200: {
            slidesPerView: 4
          }
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        spaceBetween={10}
        modules={[Pagination, Autoplay]}
        className='mySwiper'
      >
        {data.items.map((item: TFilms, i) => {
          return (
            <SwiperSlide key={item.name}>
              <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
                custom={i + 2}
                variants={i + 1 <= 4 ? textAnimation : {}}
                className='flex item-center justify-center mt-7'
              >
                <Link to={`/films/${item.id}`}>
                  <img src={item.photo} alt='' className='rounded mainPage__img placeItem__img' />
                </Link>
              </motion.div>
            </SwiperSlide>
          )
        })}{' '}
      </Swiper>
    </motion.div>
  )
}
