import { FC, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

import { SmallCard } from '../../../../components/SmallCard'
import { ViewAll } from '../../../../components/ViewAll'

import { films } from '../../../../data/films'

export const TrailerBlock: FC = () => {
  const [video, setVideo] = useState(0)

  return (
    <div className='py-20 px-4 mx-auto max-w-screen-sm lg:max-w-screen-lg xl:max-w-screen-xl'>
      <div className='px-4'>
        <div className='flex justify-between mb-7'>
          <h2 className='text-white uppercase text-2xl font-bold'>Trailers</h2>
          <ViewAll link='' text='VIEW ALL' />
        </div>
        <div className='lg:grid lg:grid-cols-trailer'>
          <div className='flex justify-center xl:max-w-4xl'>
            <iframe src={`//www.youtube.com/embed/${films[video].link}`} className='h-112 w-full' />
          </div>
          <div className='bg-filters-bg mt-2 lg:mt-0'>
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
              className='mySwiper h-112'
            >
              {films.map((item) => {
                return (
                  <SwiperSlide key={item.name} className='cursor-pointer' onClick={() => setVideo(item.id - 1)}>
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
