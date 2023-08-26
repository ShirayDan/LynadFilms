import { FC } from 'react'

import { SocialBlock } from '../../../../components/SocialBlock'

import img from '../../../../i/slider1.jpg'

export const MainPageSlider: FC = () => {
	return (
		<div className='mx-auto px-4 pt-48 bg-slider'>
			<div className='flex justify-end items-center font-bold text-sm text-white'>
				Follow us: <SocialBlock />
			</div>
			<div className='flex items-center justify-center mt-7'>
				<img src={img} alt='' className='rounded' />
			</div>
		</div>
	)
}
