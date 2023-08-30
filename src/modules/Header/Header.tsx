import { FC } from 'react'
import './Header.scss'

import logo from '../../i/logo1.png'

import { FaSearch } from 'react-icons/fa'

export const Header: FC = () => {
	return (
		<header className='header bg-[#0f2133] absolute w-full lg:bg-transparent'>
			<div className='container px-4 mx-auto'>
				<nav className='py-3 flex justify-between md:py-5'>
					<div className='flex items-center'>
						<div className='header_img-container'>
							<img src={logo} alt='logo' className={`mt-1 ${'header__logo'}`} />
						</div>
						<ul className='hidden lg:flex'>
							<li className='ml-3 text-grey font-bold uppercase text-sm'>
								<a href=''>Movies</a>
							</li>
							<li className='ml-3 text-grey font-bold uppercase text-sm'>
								<a href=''>Celebrities</a>
							</li>
							<li className='ml-3 text-grey font-bold uppercase text-sm'>
								<a href=''>News</a>
							</li>
						</ul>
					</div>
					<div className='flex items-center justify-center'>
						<div className='flex flex-col border-solid border-small w-9 h-9 p-2 border-white lg:hidden'>
							<span className={'header__line'}></span>
							<span className={'header__line header__line_two'}></span>
							<span className={'header__line header__line_three'}></span>
						</div>

						<ul className='hidden lg:flex items-center '>
							<li className='ml-3 text-grey font-bold uppercase text-sm'>
								Log in
							</li>
							<li className='ml-3 text-white font-bold uppercase text-sm rounded-3xl bg-red py-3 px-5'>
								Sign up
							</li>
						</ul>
					</div>
				</nav>

				{/* added hidden for films page */}
				<div className=' hidden border-solid border-black border-4 md:block md:hidden'>
					<form action='' className='flex '>
						<input
							type='text'
							placeholder='Search for a movie, TV Show or celebrity that you are looking for'
							className='w-full bg-dark-blue text-grey py-1.5 px-3 h-10'
						/>
						<button className='py-1.5 px-3 bg-dark-blue text-grey border-0 border-solid border-l-2 border-black flex items-center font-bold'>
							<FaSearch className='mr-2' /> Find
						</button>
					</form>
				</div>
			</div>
		</header>
	)
}
