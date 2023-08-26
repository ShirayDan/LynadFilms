import { FC } from 'react'
import './Header.scss'
import logo from '../../i/logo1.png'

export const Header: FC = () => {
	return (
		<header className='header bg-[#0f2133]'>
			<div className='container px-4'>
				<nav className='py-3 flex justify-between'>
					<div className='header_img-container'>
						<img src={logo} alt='logo' className={`mt-1 ${'header__logo'}`} />
					</div>
					<div className='flex items-center justify-center'>
						<div className='flex flex-col border-solid border-small w-9 h-9 p-2 border-white'>
							<span className={'header__line'}></span>
							<span className={'header__line header__line_two'}></span>
							<span className={'header__line header__line_three'}></span>
						</div>
					</div>
				</nav>
			</div>
		</header>
	)
}
