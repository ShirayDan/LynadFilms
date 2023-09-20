import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import { useTranslation } from 'react-i18next'
import 'swiper/css'
import 'swiper/css/pagination'

import { TFilms } from '../../../../data/types'

interface IOverview {
  data: TFilms
}

export const PhotosVideos: FC<IOverview> = ({ data }) => {
  const { t } = useTranslation()

  return (
    <div className='pb-10'>
      <h3 className='text-grey text-lg font-bold mb-1'>{t('singleStar.videos and photos')}</h3>
      <h2 className='text-2xl text-blue font-bold mb-8'>{data.name}</h2>

      <div>
        <div className='flex justify-between items-center border-0 border-solid border-b border-grey pb-3 my-7'>
          <h4 className='text-white uppercase font-bold text-sm'>
            {t('singleStar.photos')} ({data.photos.length})
          </h4>
        </div>
        <div className='lg:max-w-slider-lg xl:max-w-slider-2xl'>
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
                spaceBetween: 10
              },
              1200: {
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
            {data.photos.map((item, i) => {
              return (
                <SwiperSlide key={i}>
                  <div>
                    <img src={item} alt='' />
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>

      <div>
        <div className='flex justify-between items-center border-0 border-solid border-b border-grey pb-3 my-7'>
          <h4 className='text-white uppercase font-bold text-sm'>
            {t('singleStar.videos')} ({data.photos.length})
          </h4>
        </div>
        <div className='lg:max-w-slider-lg xl:max-w-slider-2xl'>
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
                spaceBetween: 10
              },
              1200: {
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
            {data.photos.map((item, i) => {
              return (
                <SwiperSlide key={i}>
                  <img src={item} alt='' />
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </div>
  )
}
