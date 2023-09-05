import { FC } from 'react'

import { MainPageSlider } from './components/MainPageSlider'
import { PlaceFilms } from './components/PlaceFilms'
import { SideBar } from './components/SideBar'
import { TrailerBlock } from './components/TrailerBlock'
import { NewsBlock } from './components/NewsBlock'

export const MainPage: FC = () => {
	return (
		<>
			<MainPageSlider />
			<div className='bg-[#020d18] pt-20'>
				<div className='container lg:grid lg:grid-cols-trailer mx-auto'>
					<PlaceFilms />
					<SideBar />
				</div>
			</div>
			<div className='bg-[#06121e]'>
				<div className='container mx-auto'>
					<TrailerBlock />
				</div>
			</div>
			<div className='bg-[#020d18]'>
				<NewsBlock />
			</div>
		</>
	)
}
