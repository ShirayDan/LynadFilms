import { FC } from 'react'

export const StarFilter: FC = () => {
	return (
		<div className='border-3 border-solid border-[#0f2133] bg-[#0b1a2a] p-4 mb-10 w-64'>
			<form action='' className='flex flex-col '>
				<label
					htmlFor='starName'
					className='font-bold text-sm text-grey mb-2.5'>
					Celebrity name
				</label>
				<input
					type='text'
					id='starName'
					placeholder='Enter keywords'
					className='bg-[#233a50] py-1.5 px-3 h-10 text-sm mb-4'
				/>

				<label
					htmlFor='starYear'
					className='font-bold text-sm text-grey mb-2.5'>
					Year
				</label>
				<select
					name='starYear'
					className='bg-[#233a50] text-sm font-light text-grey font-light py-1.5 px-3 h-10 mb-4'>
					<option value='type-1'>Type 1</option>
					<option value='type-2'>Type 2</option>
					<option value='type-3'>Type 3</option>
					<option value='type-4'>Type 4</option>
					<option value='type-5'>Type 5</option>
				</select>
				<label
					htmlFor='starCountry'
					className='font-bold text-sm text-grey mb-2.5'>
					Country
				</label>
				<input
					type='text'
					id='starCountry'
					placeholder='Enter keywords'
					className='bg-[#233a50] py-1.5 px-3 h-10 text-sm mb-4'
				/>
				<button
					type='submit'
					className='bg-red rounded py-3 uppercase text-sm font-bold text-white'>
					Submit
				</button>
			</form>
		</div>
	)
}
