import { FC } from 'react'

import { FaChevronDown } from 'react-icons/fa'

import logo from '../../i/logo1.png'

const data = [
	{
		title: 'Resources',
		items: [
			{ text: 'About', link: '' },
			{ text: 'Blockbuster', link: '' },
			{ text: 'Contact Us', link: '' },
			{ text: 'Forums', link: '' },
			{ text: 'Blog', link: '' },
			{ text: 'Help Center', link: '' },
		],
	},
	{
		title: 'Legal',
		items: [
			{ text: 'Terms of Use', link: '' },
			{ text: 'Privacy Policy', link: '' },
			{ text: 'Security', link: '' },
		],
	},
	{
		title: 'Account',
		items: [
			{ text: 'My Account', link: '' },
			{ text: 'Watchlist', link: '' },
			{ text: 'Collections', link: '' },
			{ text: 'User Guide', link: '' },
		],
	},
]

export const Footer: FC = () => {
	return (
		<div className='bg-slider px-5 py-20'>
			<div className='mb-4'>
				<img src={logo} alt='' className='mb-10' />
				<p className='text-grey text-sm mb-5'>
					5th Avenue st, manhattan
					<br />
					New York, NY 10001{' '}
				</p>

				<p className='text-grey'>
					Call us:{' '}
					<a className='text-white' href='tel:(+01) 202 342 6789'>
						(+01) 202 342 6789
					</a>
				</p>
			</div>

			{data.map((item) => {
				return (
					<div>
						<h4 className='mb-7 text-white font-bold'>{item.title}</h4>
						<ul className='mb-6'>
							{item.items.map((item) => {
								return (
									<li className='mb-1.5'>
										<a className='text-grey text-sm' href={item.link}>
											{item.text}
										</a>
									</li>
								)
							})}
						</ul>
					</div>
				)
			})}

			<div>
				<h4 className='mb-7 text-white font-bold'>Newsletter</h4>
				<p className='text-grey text-sm mb-4'>
					Subscribe to our newsletter system now to get latest news from us.
				</p>
				<form action='' className='flex flex-col items-start'>
					<input
						type='text'
						className='bg-transparent border-solid border-grey border text-xs text-grey rounded px-3 py-1.5 mb-5 w-full'
						placeholder='Enter your email...'
					/>
					<button
						type='submit'
						className='text-red uppercase text-sm flex items-center'>
						Subscribe now{' '}
						<FaChevronDown size='12px' className='-rotate-90 ml-1.5' />
					</button>
				</form>
			</div>
		</div>
	)
}
