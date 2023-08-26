import { FC } from 'react'

import { ViewAll } from '../../../../components/ViewAll'

import img from '../../../../i/blog-it1.jpg'

const news = [
	{
		text: 'Michael Shannon Frontrunner to play Cable in “Deadpool 2”',
		data: '13 hours ago',
	},
	{
		text: 'French cannibal horror “Raw” inspires L.A. theater to hand out “Barf Bags”',
		data: '13 hours ago',
	},
	{
		text: 'Laura Dern in talks to join Justin Kelly’s biopic “JT Leroy”',
		data: '13 hours ago',
	},
	{
		text: 'China punishes more than 300 cinemas for box office cheating',
		data: '13 hours ago',
	},
]

export const NewsBlock: FC = () => {
	return (
		<div className='px-4 py-10'>
			<div className='px-4'>
				<h2 className='text-xl mb-6 text-white font-bold uppercase'>
					Latest News
				</h2>
				<div>
					<ul className='flex '>
						<li className='mr-2'>
							<a href='' className='text-white text-sm text-grey'>
								#MOVIES
							</a>
						</li>
						<li className='mr-2'>
							<a href='' className='text-white text-sm text-grey'>
								#TV SHOWS
							</a>
						</li>
						<li>
							<a href='' className='text-white text-sm text-grey'>
								#CELEBS
							</a>
						</li>
					</ul>
				</div>

				<div className='flex flex-col py-5'>
					<img src={img} alt='' className='rounded' />
					<h3 className='text-blue text-lg mb-5'>Tab 3</h3>
					<p className='text-sm text-grey'>13 hours ago</p>
					<p className='text-sm text-grey mt-5'>
						Exclusive: Amazon Studios has acquired Victoria Woodhull, with Oscar
						winning Room star Brie Larson polsed to produce, and play the first
						female candidate for the presidency of the United States. Amazon
						bought it in a pitch package deal. Ben Kopit, who wrote the Warner
						Bros film Libertine that has...
					</p>
				</div>

				<div>
					<div className='flex'>
						<h3 className='text-white font-bold text-lg'>
							More news on Blockbuster
						</h3>
						<ViewAll text='See all Movies news' link='' />
					</div>
					{news.map((item) => {
						return (
							<div className='flex flex-col mb-7 pr-4'>
								<h6 className='text-blue text-sm'>{item.text}</h6>
								<span className='text-grey text-xs'>{item.data}</span>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}
