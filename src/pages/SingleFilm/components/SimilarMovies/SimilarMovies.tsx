import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import './SimilarMovies.scss'

import { TFilms } from '../../../../data'

import { FaStar } from 'react-icons/fa'

interface ISimilarMovies {
  data: TFilms
}

export const SimilarMovies: FC<ISimilarMovies> = ({ data }) => {
  return (
    <div className='pb-10 '>
      <h3 className='text-grey text-lg font-bold mb-1'>Related Movies To</h3>
      <h2 className='text-2xl text-blue font-bold mb-8'>{data.name}</h2>
      <div>
        <div className='flex justify-between items-center border-0 border-solid border-b border-grey pb-3 my-7'>
          <h4 className='text-white uppercase font-bold text-sm'>Related Movies ({data.similarFilms.length})</h4>
        </div>
        <div className='lg:max-w-slider-lg xl:max-w-slider-xl'>
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
            {data.similarFilms.map((item) => {
              return (
                <SwiperSlide>
                  <div className='flex justify-center py-4 flex-col items-center sm:py-2'>
                    <img src={item.image} alt='' className='max-w-3xs rounded' />
                    <h3 className='text-grey mt-3 text-center'>
                      {item.title}
                      {/* <span>(2012)</span> */}
                    </h3>
                    <p className='flex my-2 text-grey'>
                      <FaStar fill='#f5b50a' className='mr-0.5 text-lg' />
                      {item.rating}
                    </p>
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
