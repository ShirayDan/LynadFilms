import { FC } from 'react'
import './ViewAll.scss'

import { FaChevronDown } from 'react-icons/fa'

interface IViewAll {
	link: string
	text: string
}

export const ViewAll: FC<IViewAll> = ({ link, text }) => {
	return (
		<a
			href={link}
			className='uppercase text-grey inline text-sm flex items-center'>
			{text} <FaChevronDown size='12px' className='ml-1.5 -rotate-90' />
		</a>
	)
}
