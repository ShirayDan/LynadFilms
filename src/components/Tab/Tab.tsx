import { FC, useState, ReactNode } from 'react'

interface ITab {
	buttons: Array<string>
	components: Array<ReactNode>
}

export const Tab: FC<ITab> = ({ buttons, components }) => {
	const [page, setPage] = useState(0)
	return (
		<div>
			<div className='flex flex-col items-start mb-3 px-4'>
				{buttons.map((item, i) => {
					return (
						<button
							onClick={() => setPage(i)}
							className={`text-lg border-0 border-solid border-b-2 border-transparent ${
								page === i && 'border-yellow text-yellow'
							}  `}>
							{item}
						</button>
					)
				})}
			</div>
			<div>{components[page]}</div>
		</div>
	)
}
