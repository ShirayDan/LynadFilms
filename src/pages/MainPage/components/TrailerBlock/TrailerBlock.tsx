import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

import { SmallCard } from '../../../../components/SmallCard'
import { ViewAll } from '../../../../components/ViewAll'

import img from '../../../../i/ads1.png'

import { films } from '../../../../data/films'

export const TrailerBlock: FC = () => {
  return (
    <div className='py-20 px-4 mx-auto max-w-screen-sm lg:max-w-screen-lg xl:max-w-screen-xl'>
      <div className='px-4'>
        <div className='flex justify-between mb-7'>
          <h2 className='text-white uppercase text-2xl font-bold'>Trailers</h2>
          <ViewAll link='' text='VIEW ALL' />
        </div>
        <div className='lg:grid lg:grid-cols-trailer'>
          <div className='flex justify-center xl:max-w-4xl'>
            <img src={img} alt='' />
          </div>
          <div className='bg-[#0b1a2a] mt-2'>
            <Swiper
              direction={'vertical'}
              navigation={true}
              modules={[Navigation, Autoplay]}
              slidesPerView={4}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false
              }}
              className='mySwiper h-96'
            >
              {films.map((item) => {
                return (
                  <SwiperSlide>
                    <SmallCard data={item} trailer={true} />
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}
