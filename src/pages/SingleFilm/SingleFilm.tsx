import { FC } from 'react'
import { useParams } from 'react-router'
import './SingleFilm.scss'

import { Overview } from './components/Overview'
import { Cast } from './components/Cast'
import { PhotosVideos } from './components/PhotosVideos'
import { Reviews } from './components/Reviews'
import { SimilarMovies } from './components/SimilarMovies'
import { Tab } from '../../components/Tab'

import { FaPlay, FaCreditCard, FaHeart, FaStar } from 'react-icons/fa'
import { ImShare2 } from 'react-icons/im'

import { films } from '../../data/films'

export const SingleFilm: FC = () => {
  const { id } = useParams()

  const film = films[Number(id) - 1]

  return (
    <div className='pt-32 bg-[#020d18] text-grey'>
      <div className='container px-4 mx-auto lg:grid singleFilm__container'>
        <div className='px-4 mb-10 lg:px-0'>
          <div className='flex justify-center mb-4'>
            <img src={film.photo} alt='' className='rounded' />
          </div>
          <div className='bg-[#07101a] border-3 border-solid border-[#0c1c2c] p-5 flex flex-col'>
            <button className='bg-red text-white flex justify-center items-center uppercase py-4 px-6 text-sm font-bold rounded mb-3 lg:hover:text-black lg:hover:bg-yellow ease-out duration-300 cursor-pointer'>
              <FaPlay className='mr-2' /> Watch trailer
            </button>
            <button className='bg-[#dcf836] flex justify-center items-center text-black uppercase py-4 px-6 text-sm font-bold rounded lg:hover:text-white lg:hover:bg-red ease-out duration-300 cursor-pointer'>
              <FaCreditCard className='mr-2' /> Buy ticket
            </button>
          </div>
        </div>
        <div className='px-4'>
          <h1 className='text-white font-bold text-3xl mb-4'>
            {film.name} <span className='text-grey font-normal text-xl'>{film.date.split(',')[1].trim()}</span>
          </h1>
          <ul className='mb-10 md:flex items-center'>
            <li className='uppercase text-red flex text-sm items-center font-bold mb-3 md:mb-0 md:mr-3'>
              <span className='block border border-solid rounded-full border-red p-2 mr-2'>
                <FaHeart />
              </span>{' '}
              Add to favorite
            </li>
            <li className='uppercase text-red flex text-sm items-center font-bold'>
              <span className='block border border-solid rounded-full border-red p-2 mr-2'>
                <ImShare2 />
              </span>{' '}
              Share
            </li>
          </ul>
          <div className='border-0 border-solid border-y border-grey mb-10'>
            <p className='flex py-4 text-grey'>
              <FaStar fill='#f5b50a' className='mr-0.5 text-lg' />
              {film.rating}
            </p>
            <p className='flex pb-4'>
              Rate This Movie:{' '}
              <ul className='flex ml-1'>
                {Array(10)
                  .fill(1)
                  .map((_, i) => {
                    return (
                      <li>
                        <FaStar key={i} fill='#f5b50a' className='mr-0.5 text-lg' />
                      </li>
                    )
                  })}
              </ul>
            </p>
          </div>
          <Tab
            buttons={['Overview', 'Reviews', 'Cast and Crew', 'Media', 'Related movies']}
            components={[
              <Overview data={film} />,
              <Reviews data={film} />,
              <Cast data={film} />,
              <PhotosVideos data={film} />,
              <SimilarMovies data={film} />
            ]}
          />
        </div>
      </div>
    </div>
  )
}
