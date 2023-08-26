import { FC } from 'react'

import { ViewAll } from '../../../../../../components/ViewAll'

import { TPlaceFilmItem, TFilmItems } from '../../types'

interface IPlaceItem {
	data: TPlaceFilmItem
}

export const PlaceItem: FC<IPlaceItem> = ({ data }) => {
	return (
		<div className='mb-10'>
			<div className='flex justify-between items-center mb-6'>
				<h2 className='text-white text-2xl uppercase font-bold'>
					{data.title}
				</h2>
				<ViewAll link={data.link} text={'View All'} />
			</div>
			<ul>
				<li className='text-grey uppercase mb-4 text-sm'>#Popular</li>
				<li className='text-grey uppercase mb-4 text-sm'>#Coming soon</li>
				<li className='text-grey uppercase mb-4 text-sm'>#Top rated</li>
				<li className='text-grey uppercase mb-4 text-sm'>#Most reviewed</li>
			</ul>

			{data.items.map((item: TFilmItems) => {
				return (
					<div className='flex item-center justify-center mt-7'>
						<img src={item.image} alt='' className='rounded' />
					</div>
				)
			})}
		</div>
	)
}
