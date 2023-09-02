import { FC } from 'react'

import { TCrew } from '../../../../data'

interface IBiography {
	data: TCrew
}

export const Biography: FC<IBiography> = ({ data }) => {
	return (
		<div className='pb-10'>
			<h3 className='text-grey text-lg font-bold mb-1'>Biography of</h3>
			<h2 className='text-2xl text-blue font-bold mb-8'>{data.name}</h2>

			<div>
				<p>{data.bio}</p>
			</div>
		</div>
	)
}
