import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

import { FaChevronDown } from 'react-icons/fa'

import { TFilms } from '../../../../data'

interface IOverview {
	data: TFilms
}

export const Overview: FC<IOverview> = ({ data }) => {
	return (
		<div className='px-3'>
			<p className='mb-3'>
				Tony Stark creates the Ultron Program to protect the world, but when the
				peacekeeping program becomes hostile, The Avengers go into action to try
				and defeat a virtually impossible enemy together. Earth's mightiest
				heroes must come together once again to protect the world from global
				extinction.
			</p>
			<div className='my-10'>
				<div className='flex justify-between items-center border-0 border-solid border-b border-grey pb-3 '>
					<h4 className='text-white uppercase font-bold text-sm'>
						Videos and photos
					</h4>
					<a href='' className='text-blue text-xs flex items-center'>
						View all <FaChevronDown size='12px' className='ml-1.5 -rotate-90' />
					</a>
				</div>
				<div className='mt-5'>
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
						{data.photos.map((item) => {
							return (
								<SwiperSlide>
									<img src={item} alt='' />
								</SwiperSlide>
							)
						})}
					</Swiper>
				</div>
			</div>
			<div className='mb-4'>
				<div className='flex justify-between items-center border-0 border-solid border-b border-grey pb-3 '>
					<h4 className='text-white uppercase font-bold text-sm'>Cast</h4>
					<a href='' className='text-blue text-xs flex items-center'>
						Full Cast and Crew
						<FaChevronDown size='12px' className='ml-1.5 -rotate-90' />
					</a>
				</div>
				<ul>
					{data.stars.map((item) => {
						return (
							<li className='flex items-center justify-between py-3'>
								<div className='flex items-center justify-center text-sm text-blue'>
									<img src={item.photo} alt='' className='rounded' />
									<a href='' className='ml-2'>
										{item.name}
									</a>
								</div>
								<p className='text-sm'>{item.role}</p>
							</li>
						)
					})}
				</ul>
			</div>
			<div className='pb-4'>
				<div className='flex justify-between items-center border-0 border-solid border-b border-grey pb-3 '>
					<h4 className='text-white uppercase font-bold text-sm'>
						More Information
					</h4>
				</div>
				<ul className='pl-4'>
					<li className='flex justify-between font-bold text-sm py-3'>
						Director:{' '}
						<div className='text-blue font-normal'>
							{' '}
							{data.director.map((item, i, arr) => {
								return arr.length - 1 === i ? (
									<a href=''>{item}</a>
								) : (
									<a href=''>{item}</a> + ' '
								)
							})}
						</div>
					</li>
					<li className='flex justify-between font-bold text-sm py-3'>
						Writer:{' '}
						<div className='text-blue font-normal'>
							{' '}
							{data.writer.map((item, i, arr) => {
								return arr.length - 1 === i ? (
									<a href=''>{item}</a>
								) : (
									<a href=''>{item}</a> + ' '
								)
							})}
						</div>
					</li>

					<li className='flex justify-between font-bold text-sm py-3'>
						Genres:{' '}
						<div className='text-blue font-normal'>
							{' '}
							{data.tags.map((item, i, arr) => {
								return arr.length - 1 === i ? (
									<a href=''>{item}</a>
								) : (
									<a href=''>{item}</a> + ' '
								)
							})}
						</div>
					</li>
					<li className='flex justify-between font-bold text-sm py-3'>
						Release Date:{' '}
						<span className='font-normal'>
							{data.date} ({data.country})
						</span>
					</li>
					<li className='flex justify-between font-bold text-sm py-3'>
						Run Time: <span className='font-normal'>{data.duration}</span>
					</li>
					<li className='flex justify-between font-bold text-sm py-3'>
						MMPA Rating: <span className='font-normal'>{data.mmpa}</span>
					</li>
				</ul>
			</div>
		</div>
	)
}
