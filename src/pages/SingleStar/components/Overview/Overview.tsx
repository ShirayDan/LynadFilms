import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import 'swiper/css'
import 'swiper/css/pagination'

import { Filmlist } from '../Filmlist'

import { TCrew } from '../../../../data/types'

import { FaChevronDown } from 'react-icons/fa'

interface IOverview {
  data: TCrew
}

export const Overview: FC<IOverview> = ({ data }) => {
  const { t } = useTranslation()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='lg:grid grid-cols-tabs'
    >
      <div className=''>
        <p className='text-grey mb-3'>{data.bio.slice(0, 150) + ' ...'}</p>
        <div className='pt-10'>
          <div className='flex justify-between items-center border-0 border-solid border-b border-grey pb-3 '>
            <h4 className='text-white uppercase font-bold text-sm'>{t('singleStar.videos and photos')}</h4>
            <a
              href=''
              className='text-blue text-xs flex items-center lg:hover:text-[purple] dark:lg:hover:text-yellow ease-out duration-300 cursor-pointer'
            >
              {t('mainPage.view all')} <FaChevronDown size='12px' className='ml-1.5 -rotate-90' />
            </a>
          </div>
          <div className='my-5 lg:max-w-slider-lg xl:max-w-slider-xl'>
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
          <div className='mb-4'>
            <div className='flex justify-between items-center border-0 border-solid border-b border-grey pb-3 mb-4'>
              <h4 className='text-white uppercase font-bold text-sm'>{t('singleStar.filmography')}</h4>
              <a
                href=''
                className='text-blue text-xs flex items-center lg:hover:text-[purple] dark:lg:hover:text-yellow ease-out duration-300 cursor-pointer'
              >
                {t('mainPage.view all')} <FaChevronDown size='12px' className='ml-1.5 -rotate-90' />
              </a>
            </div>
            <Filmlist data={data.movies} />
          </div>
          <div className='pb-4 lg:hidden'>
            <div className='flex justify-between items-center border-0 border-solid border-b border-grey pb-3 '>
              <h4 className='text-white uppercase font-bold text-sm'>More Information</h4>
            </div>
          </div>
        </div>
      </div>
      <ul className='px-4 pb-10 lg:pr-0 lg:pl-4'>
        <li className='flex justify-between font-bold text-sm pb-3 lg:flex-col'>
          {t('singleStar.full name')}: <span className='font-normal whitespace-nowrap'>{data.name}</span>
        </li>
        <li className='flex justify-between font-bold text-sm pb-3 lg:flex-col'>
          {t('singleStar.birth')}: <span className='font-normal  whitespace-nowrap'>{data.birth}</span>
        </li>
        <li className='flex justify-between font-bold text-sm pb-3 lg:flex-col'>
          {t('singleStar.country')}: <span className='font-normal  whitespace-nowrap'>{data.country}</span>
        </li>
        <li className='flex justify-between font-bold text-sm pb-3 lg:flex-col'>
          {t('singleStar.height')}: <span className='font-normal  whitespace-nowrap'>{data.height} cm</span>
        </li>
      </ul>
    </motion.div>
  )
}
