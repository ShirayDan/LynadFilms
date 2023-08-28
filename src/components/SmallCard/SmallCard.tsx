import { FC } from 'react'
import './SmallCard.scss'

interface ISmallCard {
	data: {
		image: string
		name: string
		position?: string
		duration?: string
		link: string
	}
	trailer?: boolean
}

export const SmallCard: FC<ISmallCard> = ({ data, trailer }) => {
	return (
		<div className={`flex mb-7 ${trailer && 'p-2 mb-0'}`}>
			<div className='mr-5'>
				{trailer ? (
					<img src={data.image} alt='' className='rounded w-20' />
				) : (
					<a href={data.link} className='smallCard__img-cont'>
						<img src={data.image} alt='' className='rounded w-100' />
					</a>
				)}
			</div>
			<div className='flex flex-col justify-center'>
				<a href={data.link} className='text-white text-sm smallCard__title'>
					{data.name}
				</a>
				<span className='text-grey uppercase text-xs'>
					{data.position || data.duration}
				</span>
			</div>
		</div>
	)
}
