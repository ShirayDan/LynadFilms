import { FC } from 'react'
import './SideBar.scss'

import { ViewAll } from '../../../../components/ViewAll'
import { SmallCard } from '../../../../components/SmallCard'

import img from '../../../../i/ads1.png'
import ava1 from '../../../../i/ava1.jpg'
import ava2 from '../../../../i/ava2.jpg'
import ava3 from '../../../../i/ava3.jpg'
import ava4 from '../../../../i/ava4.jpg'

const actors = [
	{
		image: ava1,
		name: 'Samuel N. Jack',
		position: 'Actor',
		link: '',
	},
	{
		image: ava2,
		name: 'Benjamin Carroll',
		position: 'Actor',
		link: '',
	},
	{
		image: ava3,
		name: 'Beverly Griffin',
		position: 'Actor',
		link: '',
	},
	{
		image: ava4,
		name: 'Justin Weaver',
		position: 'Actor',
		link: '',
	},
]

export const SideBar: FC = () => {
	return (
		<aside className='px-4 mx-auto max-w-screen-sm lg:mx-0 lg:max-w-none'>
			<div className='px-4'>
				<div className='mb-10'>
					<img src={img} alt='' />
				</div>

				<h4 className='text-lg text-white uppercase font-bold mb-7 actor__title'>
					Spotlight celebrities
				</h4>
				{actors.map((item) => {
					return <SmallCard data={item} />
				})}
				<ViewAll link='/stars' text='See all celebrities' />
			</div>
		</aside>
	)
}
