import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { MainSliderItem } from './components/MainSliderItem'
import 'swiper/css'
import 'swiper/css/pagination'
import './MainPageSlider.scss'

import { textAnimation } from '../../../../helpers/animations'

import { SocialBlock } from '../../../../components/SocialBlock'

import { films } from '../../../../data/films'

export const MainPageSlider: FC = () => {
  const { t } = useTranslation()

  return (
    <div className='pt-36 bg-main-trailer dark:bg-slider pb-10'>
      <div className='mx-auto px-4 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl '>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          custom={1}
          variants={textAnimation}
          className='flex justify-end items-center font-bold text-sm text-white'
        >
          <span className='mr-2'>{t('mainPage.follow us')}</span> <SocialBlock />
        </motion.div>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          custom={1}
          variants={textAnimation}
          className='flex items-center justify-center mt-7'
        >
          <Swiper
            pagination={{
              clickable: true
            }}
            loop={true}
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
              600: {
                slidesPerView: 2
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20
              },
              992: {
                slidesPerView: 4
              }
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false
            }}
            modules={[Pagination, Autoplay]}
            className='mySwiper'
          >
            {films.map((item, i) => {
              return (
                <SwiperSlide key={item.name}>
                  <MainSliderItem data={item} i={i} />
                </SwiperSlide>
              )
            })}
          </Swiper>
        </motion.div>
      </div>
    </div>
  )
}
