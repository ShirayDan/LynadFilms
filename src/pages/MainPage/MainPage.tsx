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
			<div className='bg-[#020d18]'>
				<PlaceFilms />
				<SideBar />
			</div>
			<div className='bg-[#06121e]'>
				<TrailerBlock />
			</div>
			<div className='bg-[#020d18]'>
				<NewsBlock />
			</div>
		</>
	)
}
