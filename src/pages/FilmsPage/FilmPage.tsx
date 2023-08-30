import { FC } from 'react'

import { FilmsFilter } from './components/FilmsFilter'
import { FilmsList } from './components/FilmsList'

export const FilmPage: FC = () => {
	return (
		<div className='pt-20 bg-[#020d18]'>
			<div className='container lg:flex mx-auto flex-row-reverse lg:justify-center'>
				<div className='px-4'>
					<FilmsFilter />
				</div>
				<div className='px-4'>
					<FilmsList />
				</div>
			</div>
		</div>
	)
}
