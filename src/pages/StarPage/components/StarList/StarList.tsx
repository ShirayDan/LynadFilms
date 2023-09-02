import { FC } from 'react'

import { StarCardGrid } from '../../../../components/StarCardGrid'
import { StarCard } from '../../../../components/StarCard'

import { BsFillGrid3X3GapFill, BsListUl } from 'react-icons/bs'

import { actors } from '../../../../data'

export const StarList: FC = () => {
	return (
		<div className='pb-20'>
			<div className='pb-4'>
				<div className='border-0  border-y border-grey border-solid sm:flex items-center justify-between pt-2'>
					<p className='text-grey text-sm mb-2 '>Found 1608 movies in total</p>
					<div className=' flex justify-between items-center wrap pb-2'>
						<label htmlFor='filmSorting' className='text-grey text-sm mr-2'>
							Sort by:
						</label>
						<select
							name='filmSorting'
							id=''
							className='text-grey bg-[#233a50] text-sm font-light py-1.5 px-3'>
							<option value=''>Rating Descending</option>
							<option value=''>Rating Ascending</option>
							<option value=''>Release date Descending</option>
							<option value=''>Release date Ascending</option>
						</select>
					</div>
					<div className='flex pb-2'>
						<BsFillGrid3X3GapFill className='mr-2 text-grey' />
						<BsListUl size={'18px'} className='text-grey' />
					</div>
				</div>
			</div>

			{/* {actors.map((item) => {
				return <StarCard data={item} />
			})} */}

			<div className='grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
				{actors.map((item) => {
					return <StarCardGrid data={item} />
				})}
			</div>
		</div>
	)
}
