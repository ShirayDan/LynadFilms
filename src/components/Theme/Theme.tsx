import { FC, useState } from 'react'

import { FaChevronDown } from 'react-icons/fa'

interface ITheme {
  textStyle: string
  burger?: boolean
}

export const Theme: FC<ITheme> = ({ textStyle, burger }) => {
  const [openTheme, setOpenTheme] = useState(false)
  return (
    <>
      <div className={`select-none ${textStyle}`} onClick={() => setOpenTheme((state) => !state)}>
        <span className='flex items-center'>
          Theme <FaChevronDown className={`ml-1 ${openTheme && 'rotate-180'}`} />
        </span>
      </div>
      {openTheme && (
        <ul className={`w-24 top-6 ${burger && 'right-0'} text-white absolute bg-dark-blue p-2.5 rounded`}>
          <li className='flex mb-2'>
            <span className='bg-black w-5 h-5 rounded-full mr-2'></span>
            Dark
          </li>
          <li className='flex'>
            <span className='bg-white w-5 h-5 rounded-full mr-2'></span>
            Light
          </li>
        </ul>
      )}
    </>
  )
}
