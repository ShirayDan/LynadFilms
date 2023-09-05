import { FC } from 'react'

import { SmallCard } from '../../../../components/SmallCard'
import { ViewAll } from '../../../../components/ViewAll'

import img from '../../../../i/ads1.png'
import prev1 from '../../../../i/trailer2.jpg'
import prev2 from '../../../../i/trailer3.png'
import prev3 from '../../../../i/trailer4.png'
import prev4 from '../../../../i/trailer5.jpg'
import prev5 from '../../../../i/trailer6.jpg'
import prev6 from '../../../../i/trailer7.jpg'

const data = [
	{
		name: 'Exclusive Interview:  Skull Island',
		duration: '2:44',
		link: '',
		image: prev5,
	},
	{
		name: 'Oblivion: Official Teaser Trailer',
		duration: '2:37',
		link: '',
		image: prev1,
	},
	{
		name: 'Wonder Woman',
		duration: '2:30',
		link: '',
		image: prev6,
	},
	{
		name: 'Fast&Furious 8',
		duration: '3:11',
		link: '',
		image: prev4,
	},
	{
		name: 'Beauty and the Beast: Official Teaser Trailer 2',
		duration: '2:32',
		link: '',
		image: prev3,
	},
	{
		name: 'Logan: Director James Mangold Interview',
		duration: '2:43',
		link: '',
		image: prev2,
	},
]

export const TrailerBlock: FC = () => {
	return (
		<div className='py-20 px-4 mx-auto max-w-screen-sm lg:max-w-screen-lg xl:max-w-screen-xl'>
			<div className='px-4'>
				<div className='flex justify-between mb-7'>
					<h2 className='text-white uppercase text-2xl font-bold'>Trailers</h2>
					<ViewAll link='' text='VIEW ALL' />
				</div>
				<div className='lg:grid lg:grid-cols-trailer '>
					<div className='flex justify-center xl:max-w-4xl'>
						<img src={img} alt='' />
					</div>
					<div className='bg-[#0b1a2a] mt-2'>
						{data.map((item) => {
							return <SmallCard data={item} trailer={true} />
						})}
					</div>
				</div>
			</div>
		</div>
	)
}
