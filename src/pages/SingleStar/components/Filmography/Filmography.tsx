import { FC } from 'react'

import { Filmlist } from '../Filmlist'

import { TCrew } from '../../../../data'

interface IFilmography {
	data: TCrew
}

export const Filmography: FC<IFilmography> = ({ data }) => {
	return (
		<div className='pb-10'>
			<h3 className='text-grey text-lg font-bold mb-1'>Filmography of</h3>
			<h2 className='text-2xl text-blue font-bold mb-8'>{data.name}</h2>
			<Filmlist data={data.movies} />
		</div>
	)
}
