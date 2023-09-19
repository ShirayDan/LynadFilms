import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import { Link } from 'react-router-dom'
import 'swiper/css'
import 'swiper/css/pagination'
import './MainPageSlider.scss'

import { SocialBlock } from '../../../../components/SocialBlock'

import { FaStar } from 'react-icons/fa'

import { films } from '../../../../data/films'

export const MainPageSlider: FC = () => {
  return (
    <div className='pt-36 bg-main-trailer dark:bg-slider pb-10'>
      <div className='mx-auto px-4 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl '>
        <div className='flex justify-end items-center font-bold text-sm text-white'>
          <span className='mr-2'>Follow us:</span> <SocialBlock />
        </div>
        <div className='flex items-center justify-center mt-7'>
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
            {films.map((item) => {
              return (
                <SwiperSlide key={item.name}>
                  <div className='flex justify-center'>
                    <div className='relative top-0 left-0'>
                      {' '}
                      <Link to={`/films/${item.id}`}>
                        <img src={item.photo} alt='' className='rounded mainPage__img' />
                      </Link>
                      <div className='absolute bottom-3 left-3'>
                        <div className='flex mb-2'>
                          {item.tags.map((item) => {
                            return (
                              <div
                                key={item}
                                className='uppercase rounded bg-blue text-[#fff] text-xs p-1 font-bold mr-1'
                              >
                                {item}
                              </div>
                            )
                          })}
                        </div>
                        <Link to={`/films/${item.id}`} className='uppercase text-[#fff] font-bold'>
                          {item.name}
                        </Link>
                        <p className='flex text-xs items-end text-[#fff] leading-4'>
                          <FaStar fill='#f5b50a' className='mr-0.5 text-lg' />{' '}
                          <span className='text-lg leading-4 mr-1'>{item.rating}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </div>
  )
}
