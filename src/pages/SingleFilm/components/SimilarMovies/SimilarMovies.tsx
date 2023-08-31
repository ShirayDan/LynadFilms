import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import './SimilarMovies.scss'

import { TFilms } from '../../../../data'

interface ISimilarMovies {
	data: TFilms
}

export const SimilarMovies: FC<ISimilarMovies> = ({ data }) => {
	return (
		<div className='pb-10 px-4'>
			<h3 className='text-grey text-lg font-bold mb-4'>Videos and Photos of</h3>
			<h2 className='text-2xl text-blue font-bold mb-8'>{data.name}</h2>

			<div>
				<div className='flex justify-between items-center border-0 border-solid border-b border-grey pb-3 my-7'>
					<h4 className='text-white uppercase font-bold text-sm'>
						Photos ({data.similarFilms.length})
					</h4>
				</div>
				<div className=''>
					<Swiper
						pagination={{
							clickable: true,
						}}
						loop={true}
						slidesPerView={1}
						spaceBetween={10}
						breakpoints={{
							600: {
								slidesPerView: 2,
							},
							768: {
								slidesPerView: 3,
								spaceBetween: 20,
							},
							992: {
								slidesPerView: 4,
							},
						}}
						// autoplay={{
						// 	delay: 2500,
						// 	disableOnInteraction: false,
						// }}

						modules={[Pagination, Autoplay]}
						className='mySwiper'>
						{data.similarFilms.map((item) => {
							return (
								<SwiperSlide>
									<img
										src={item.image}
										alt=''
										className='rounded SimilarMovies__img'
									/>
								</SwiperSlide>
							)
						})}
					</Swiper>
				</div>
			</div>
		</div>
	)
}
