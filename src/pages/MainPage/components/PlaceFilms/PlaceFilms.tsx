import { FC } from 'react'
import './PlaceFilms.scss'

import { PlaceItem } from './components/PlaceItem'

import { films } from '../../../../data'

const data = [
	{ title: 'In theater', link: '', items: films },
	{ title: 'On tv', link: '', items: films },
]

export const PlaceFilms: FC = () => {
	return (
		<div className='pt-20 px-4 mx-auto max-w-screen-sm'>
			<div className='px-4'>
				{data.map((item) => {
					return <PlaceItem data={item} />
				})}
			</div>
		</div>
	)
}
