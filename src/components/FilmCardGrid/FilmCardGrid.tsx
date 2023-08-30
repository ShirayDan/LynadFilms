import { FC } from 'react'

import { TFilms } from '../../data'

import { FaStar } from 'react-icons/fa'

interface IFilmCard {
	data: TFilms
}

export const FilmCardGrid: FC<IFilmCard> = ({ data }) => {
	return (
		<div className='flex justify-center py-4 flex-col items-center sm:py-2'>
			<img src={data.img} alt='' className='max-w-3xs rounded' />
			<h3 className='text-grey mt-3 text-center'>
				{data.name}
				{/* <span>(2012)</span> */}
			</h3>
			<p className='flex my-2 text-grey'>
				<FaStar fill='#f5b50a' className='mr-0.5 text-lg' />
				{data.rating}
			</p>
		</div>
	)
}
