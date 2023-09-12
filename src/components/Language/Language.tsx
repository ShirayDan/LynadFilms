import { FC, useState } from 'react'

import ua from '../../i/ua.svg'
import usa from '../../i/usa.svg'
import { FaChevronDown } from 'react-icons/fa'

interface ILanguage {
  textStyle: string
}

export const Language: FC<ILanguage> = ({ textStyle }) => {
  const [openLang, setOpenLang] = useState(false)
  return (
    <>
      <div className={`select-none ${textStyle}`} onClick={() => setOpenLang((state) => !state)}>
        <span className='flex items-center'>
          Language <FaChevronDown className={`ml-3 ${openLang && 'rotate-180'}`} />
        </span>
      </div>
      {openLang && (
        <ul className='w-24 top-6 text-white absolute bg-grey p-2.5 rounded'>
          <li className='flex mb-2'>
            {' '}
            <img src={ua} alt='' className='w-5 mr-2' />
            UA
          </li>
          <li className='flex'>
            <img src={usa} alt='' className='w-5 mr-2' />
            USA
          </li>
        </ul>
      )}
    </>
  )
}
