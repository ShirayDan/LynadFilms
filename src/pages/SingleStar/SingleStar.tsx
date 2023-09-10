import { FC } from 'react'
import { useParams } from 'react-router'
import './SingleStar.scss'

import { Tab } from '../../components/Tab'
import { SocialBlock } from '../../components/SocialBlock'
import { Biography } from './components/Biography'
import { Filmography } from './components/Filmography'
import { Media } from './components/Media'
import { Overview } from './components/Overview'

import { crew } from '../../data/crew'

export const SingleStar: FC = () => {
  const { id } = useParams()

  const actor = crew[Number(id) - 1]
  return (
    <div className='pt-32 bg-[#020d18] text-grey'>
      <div className='container px-4 mx-auto lg:grid singleStar__container'>
        <div className='px-4 mb-10 lg:px-0'>
          <div className='flex justify-center mb-4 lg:justify-start '>
            <img src={actor.photo} alt='' className='rounded singleStar__photo' />
          </div>
        </div>
        <div className='px-4'>
          <h1 className='text-white font-bold text-3xl mb-6'>{actor.name}</h1>
          <h2 className='capitalize text-grey mb-3'>{actor.role}</h2>
          <div className='mb-10'>
            <SocialBlock />
          </div>

          <Tab
            buttons={['Overview', 'Biography', 'Media', 'Filmography']}
            components={[
              <Overview data={actor} />,
              <Biography data={actor} />,
              <Media data={actor} />,
              <Filmography data={actor} />
            ]}
          />
        </div>
      </div>
    </div>
  )
}
