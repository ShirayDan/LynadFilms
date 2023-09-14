import { FC, useState } from 'react'

import { changeTheme } from '../../redux/slices/theme'

import { FaChevronDown, FaDesktop, FaSun, FaCloud } from 'react-icons/fa'
import { useAppDispatch, useAppSelector } from '../../redux/hook'

interface ITheme {
  textStyle: string
  burger?: boolean
}

const options = [
  { icon: <FaSun className='mr-2' />, text: 'light' },
  { icon: <FaCloud className='mr-2' />, text: 'dark' },
  { icon: <FaDesktop className='mr-2 mt-0.5' />, text: 'system' }
]

export const Theme: FC<ITheme> = ({ textStyle, burger }) => {
  const [openTheme, setOpenTheme] = useState(false)
  const dispatch = useAppDispatch()
  const currTheme = useAppSelector(({ theme }) => theme.theme)

  return (
    <>
      <div className={`select-none cursor-pointer ${textStyle}`} onClick={() => setOpenTheme((state) => !state)}>
        <span className='flex items-center lg:hover:text-[purple] dark:lg:hover:text-yellow ease-out duration-300'>
          Theme <FaChevronDown className={`ml-1 ${openTheme && 'rotate-180'}`} />
        </span>
      </div>
      {openTheme && (
        <ul className={`w-24 top-6 ${burger && 'right-0'} text-white absolute bg-dark-blue p-2.5 rounded`}>
          {options.map((item) => {
            return (
              <li
                className={`flex mb-1 select-none items-center cursor-pointer capitalize lg:hover:text-[purple] dark:lg:hover:text-yellow ease-out duration-300 ${
                  currTheme === item.text && 'text-[purple] dark:text-yellow'
                }`}
                onClick={() => dispatch(changeTheme(item.text))}
              >
                {item.icon}
                {item.text}
              </li>
            )
          })}
        </ul>
      )}
    </>
  )
}
