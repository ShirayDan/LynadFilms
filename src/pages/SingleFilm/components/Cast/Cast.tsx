import { FC } from 'react'

import { CastGroup } from './components/CastGroup'

import { TFilms } from '../../../../data'

interface IOverview {
	data: TFilms
}

export const Cast: FC<IOverview> = ({ data }) => {
	return (
		<div className='pb-10 px-4'>
			<h3 className='text-grey text-lg font-bold mb-4'>Cast & Crew of</h3>
			<h2 className='text-2xl text-blue font-bold mb-8'>{data.name}</h2>

			<CastGroup text={'Directors'} data={data.director} />
			<CastGroup text={'Film Crew'} data={data.filmCrew} />
			<CastGroup text={'Cast'} data={data.stars} />
		</div>
	)
}
