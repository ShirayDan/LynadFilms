import { FC } from 'react'

import { Overview } from './components/Overview'

import { FaPlay, FaCreditCard, FaHeart, FaStar } from 'react-icons/fa'
import { ImShare2 } from 'react-icons/im'

import { films } from '../../data'

export const SingleFilm: FC = () => {
	const film = films[0]

	return (
		<div className='pt-20 bg-[#020d18] text-grey'>
			<div className='container px-4'>
				<div className='px-4 mb-10'>
					<div className='flex justify-center mb-4'>
						<img src={film.img} alt='' />
					</div>
					<div className='bg-[#07101a] border-3 border-solid border-[#0c1c2c] p-5 flex flex-col '>
						<button className='bg-red text-white flex justify-center items-center uppercase py-4 px-6 text-sm font-bold rounded mb-3'>
							<FaPlay fill='white' className='mr-2' /> Watch trailer
						</button>
						<button className='bg-[#dcf836] flex justify-center items-center text-black uppercase py-4 px-6 text-sm font-bold rounded '>
							<FaCreditCard fill='black' className='mr-2' /> Buy ticket
						</button>
					</div>
				</div>
				<div className='px-4'>
					<h1 className='text-white font-bold text-3xl mb-4'>
						{film.name}{' '}
						<span className='text-grey font-normal text-xl'>2015</span>
					</h1>
					<ul className='mb-10'>
						<li className='uppercase text-red flex text-sm items-center font-bold mb-3'>
							<span className='block border border-solid rounded-full border-red p-2 mr-2'>
								<FaHeart />
							</span>{' '}
							Add to favorite
						</li>
						<li className='uppercase text-red flex text-sm items-center font-bold'>
							<span className='block border border-solid rounded-full border-red p-2 mr-2'>
								<ImShare2 />
							</span>{' '}
							Share
						</li>
					</ul>
				</div>
				<div className='border-0 border-solid border-y border-grey mx-4 mb-10'>
					<p className='flex py-4 text-grey'>
						<FaStar fill='#f5b50a' className='mr-0.5 text-lg' />
						{film.rating}
					</p>
					<p className='flex pb-4'>
						Rate This Movie:{' '}
						<ul className='flex ml-1'>
							{Array(10)
								.fill(1)
								.map((_, i) => {
									return (
										<li>
											<FaStar
												key={i}
												fill='#f5b50a'
												className='mr-0.5 text-lg'
											/>
										</li>
									)
								})}
						</ul>
					</p>
				</div>
				<Overview data={film} />
			</div>
		</div>
	)
}
