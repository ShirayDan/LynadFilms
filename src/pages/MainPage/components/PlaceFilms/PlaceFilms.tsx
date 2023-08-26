import { FC } from 'react'
import './PlaceFilms.scss'

import { TPlaceFilmItem } from './types'

import img from '../../../../i/mv-item4.jpg'

import { PlaceItem } from './components/PlaceItem'

const data: TPlaceFilmItem[] = [
	{ title: 'In theater', link: '', items: [{ image: img, link: '' }] },
	{ title: 'On tv', link: '', items: [{ image: img, link: '' }] },
]

export const PlaceFilms: FC = () => {
	return (
		<div className='pt-20 px-4'>
			<div className='px-4'>
				{data.map((item) => {
					return <PlaceItem data={item} />
				})}
			</div>
		</div>
	)
}
