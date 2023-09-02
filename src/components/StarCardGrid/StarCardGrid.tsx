import { FC } from 'react'
import './StarCardGrid.scss'

import { TCrew } from '../../data'

interface IStarCardGrid {
	data: TCrew
}

export const StarCardGrid: FC<IStarCardGrid> = ({ data }) => {
	return (
		<div className='flex justify-center py-4 flex-col items-center sm:py-2'>
			<img
				src={data.photo}
				alt=''
				className='star-card-grid__photo rounded mb-4'
			/>
			<h2 className='font-bold text-2xl text-white'>{data.name}</h2>
			<h3 className='text-grey capitalize'>
				{data.role}, {data.country}
			</h3>
		</div>
	)
}
