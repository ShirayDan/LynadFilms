import { FC } from 'react'
import './SideBar.scss'

import { ViewAll } from '../../../../components/ViewAll'
import { SmallCard } from '../../../../components/SmallCard'

import img from '../../../../i/ads1.png'

import { crew } from '../../../../data/crew'

export const SideBar: FC = () => {
  return (
    <aside className='px-4 mx-auto max-w-screen-sm lg:mx-0 lg:max-w-none'>
      <div className='px-4'>
        <div className='mb-10'>
          <img src={img} alt='' />
        </div>

        <h4 className='text-lg text-white uppercase font-bold mb-7 actor__title '>Spotlight celebrities</h4>
        {crew.map((item, i) => {
          if (i > 3) {
            return
          }
          return <SmallCard data={item} />
        })}
        <ViewAll link='/stars' text='See all celebrities' />
      </div>
    </aside>
  )
}
