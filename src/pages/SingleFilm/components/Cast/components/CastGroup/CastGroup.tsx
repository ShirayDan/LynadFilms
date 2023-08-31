import { FC } from 'react'

import { PersonList } from '../../../../../../components/PersonList'

import { TCrew } from '../../../../../../data'

interface ICastGroup {
	text: string
	data: TCrew[]
}

export const CastGroup: FC<ICastGroup> = ({ text, data }) => {
	return (
		<div className='mb-6'>
			<div className='flex justify-between items-center border-0 border-solid border-b border-grey pb-3 '>
				<h4 className='text-white uppercase font-bold text-sm'>{text}</h4>
			</div>
			<PersonList data={data} />
		</div>
	)
}
