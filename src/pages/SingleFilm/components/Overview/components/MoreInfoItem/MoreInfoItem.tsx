import { FC } from 'react'

import { TCrew } from '../../../../../../data'

interface IMoreInfoItem {
	data: TCrew[] | Array<string>
	text: string
}

export const MoreInfoItem: FC<IMoreInfoItem> = ({ data, text }) => {
	return (
		<li className='flex justify-between font-bold text-sm py-3'>
			{text}
			<div className='text-blue font-normal'>
				{' '}
				{data.map((item, i, arr) => {
					return arr.length - 1 === i ? (
						<a href=''>{typeof item === 'object' ? item.name : item}</a>
					) : (
						<a href=''>{typeof item === 'object' ? item.name : item}</a> + ' '
					)
				})}
			</div>
		</li>
	)
}
