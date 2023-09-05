import { FC } from 'react'
import './PlaceFilms.scss'

import { PlaceItem } from './components/PlaceItem'

import { films } from '../../../../data'

const data = [
	{ title: 'Films', link: '/films', items: films },
	{ title: 'Serial', link: '/films', items: films },
]

export const PlaceFilms: FC = () => {
	return (
		<div className='px-4 mx-auto max-w-screen-sm lg:mx-0 lg:max-w-2xl xl:max-w-4xl'>
			<div className='px-4'>
				{data.map((item) => {
					return <PlaceItem data={item} />
				})}
			</div>
		</div>
	)
}
