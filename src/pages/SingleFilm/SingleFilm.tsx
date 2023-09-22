import { FC } from 'react'
import { useParams } from 'react-router'
import { motion } from 'framer-motion'
import './SingleFilm.scss'

import { textAnimation } from '../../helpers/animations'

import { Overview } from './components/Overview'
import { Cast } from './components/Cast'
import { PhotosVideos } from './components/PhotosVideos'
import { Reviews } from './components/Reviews'
import { SimilarMovies } from './components/SimilarMovies'
import { Tab } from '../../components/Tab'
import { useTranslation } from 'react-i18next'

import { FaPlay, FaCreditCard, FaHeart, FaStar } from 'react-icons/fa'
import { ImShare2 } from 'react-icons/im'

import { films } from '../../data/films'
import { SocialBlock } from '../../components/SocialBlock'

export const SingleFilm: FC = () => {
  const { id } = useParams()
  const { t } = useTranslation()

  const film = films[Number(id) - 1]

  return (
    <div className='pt-32 bg-main-bg text-grey'>
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        variants={textAnimation}
        className='container px-4 mx-auto lg:grid singleFilm__container'
      >
        <motion.div custom={1} variants={textAnimation} className='px-4 mb-10 lg:px-0'>
          <div className='flex justify-center mb-4'>
            <img src={film.photo} alt='' className='rounded' />
          </div>
          <div className='border-3 border-solid border-filters-bg p-5 flex flex-col'>
            <button className='bg-red text-[#fff] flex justify-center items-center uppercase py-4 px-6 text-sm font-bold rounded mb-3 lg:hover:text-[#000] lg:hover:bg-yellow ease-out duration-300 cursor-pointer'>
              <FaPlay className='mr-2' /> {t('singleFilm.watch trailer')}
            </button>
            <button className='bg-yellow flex justify-center items-center text-[#000] uppercase py-4 px-6 text-sm font-bold rounded lg:hover:text-[#fff] lg:hover:bg-red ease-out duration-300 cursor-pointer'>
              <FaCreditCard className='mr-2' /> {t('singleFilm.buy ticket')}
            </button>
          </div>
        </motion.div>
        <motion.div custom={2} variants={textAnimation} className='px-4'>
          <h1 className='text-white font-bold text-3xl mb-4'>
            {film.name} <span className='text-grey font-normal text-xl'>{film.date.split(',')[1].trim()}</span>
          </h1>
          <ul className='mb-10 md:flex items-center'>
            <li className='uppercase text-red flex text-sm items-center cursor-pointer font-bold mb-3 md:mb-0 md:mr-3'>
              <span className='block border border-solid rounded-full border-red p-2 mr-2'>
                <FaHeart />
              </span>{' '}
              {t('singleFilm.favorite')}
            </li>
            <li className='uppercase text-red singleFilm__share cursor-pointer flex text-sm items-center font-bold h-10'>
              <span className='block border border-solid rounded-full border-red p-2 mr-2'>
                <ImShare2 />
              </span>{' '}
              {t('singleFilm.share')}
              <div className='relative singleFilm__share-list p-3 bg-red rounded ml-4 text-[#fff]'>
                <SocialBlock />
              </div>
            </li>
          </ul>
          <div className='border-0 border-solid border-y border-grey mb-10 flex items-start py-4 flex-col sm:flex-row sm:items-center sm:justify-between'>
            <p className='flex text-grey mb-2 sm:mr-2 sm:mb-0'>
              <FaStar fill='#f5b50a' className='mr-0.5 text-lg' />
              {film.rating}
            </p>
            <div className='flex items-center'>
              {t('singleFilm.rate this movie')}
              <ul className='flex ml-1'>
                {Array(10)
                  .fill(1)
                  .map((_, i) => {
                    return (
                      <li key={i}>
                        <FaStar fill='#f5b50a' className='mr-0.5 text-lg' />
                      </li>
                    )
                  })}
              </ul>
            </div>
          </div>
          <Tab
            buttons={[
              t('singleFilm.overview'),
              t('singleFilm.reviews'),
              t('singleFilm.cast and crew'),
              t('singleFilm.media'),
              t('singleFilm.related movies')
            ]}
            components={[
              <Overview data={film} />,
              <Reviews data={film} />,
              <Cast data={film} />,
              <PhotosVideos data={film} />,
              <SimilarMovies data={film} />
            ]}
          />
        </motion.div>
      </motion.div>
    </div>
  )
}
