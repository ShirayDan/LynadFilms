import { FC } from 'react'

import { ViewAll } from '../../../../components/ViewAll'

import img from '../../../../i/blog-it1.jpg'
import { Link } from 'react-router-dom'

const news = [
  {
    text: 'Michael Shannon Frontrunner to play Cable in “Deadpool 2”',
    data: '13 hours ago'
  },
  {
    text: 'French cannibal horror “Raw” inspires L.A. theater to hand out “Barf Bags”',
    data: '13 hours ago'
  },
  {
    text: 'Laura Dern in talks to join Justin Kelly’s biopic “JT Leroy”',
    data: '13 hours ago'
  },
  {
    text: 'China punishes more than 300 cinemas for box office cheating',
    data: '13 hours ago'
  }
]

export const NewsBlock: FC = () => {
  return (
    <div className='px-4 py-10 mx-auto max-w-screen-sm lg:max-w-screen-lg xl:max-w-screen-xl'>
      <div className='px-4'>
        <h2 className='text-xl mb-6 text-white font-bold uppercase'>Latest News</h2>
        <div>
          <ul className='flex '>
            <li className='mr-2'>
              <a
                href=''
                className='text-white text-sm text-grey font-bold lg:hover:text-[purple] dark:lg:hover:text-yellow ease-out duration-300'
              >
                #MOVIES
              </a>
            </li>
            <li className='mr-2'>
              <a
                href=''
                className='text-white text-sm text-grey font-bold lg:hover:text-[purple] dark:lg:hover:text-yellow ease-out duration-300'
              >
                #TV SHOWS
              </a>
            </li>
            <li>
              <a
                href=''
                className='text-white text-sm text-grey font-bold lg:hover:text-[purple] dark:lg:hover:text-yellow ease-out duration-300'
              >
                #CELEBS
              </a>
            </li>
          </ul>
        </div>
        <div className='lg:grid lg:grid-cols-trailer '>
          <div className='flex flex-col py-5 px-2 '>
            <img src={img} alt='' className='rounded max-w-sm flex self-center' />

            <h3 className='text-blue text-lg mb-5 mt-7'>Tab 3</h3>
            <p className='text-sm text-grey'>13 hours ago</p>
            <p className='text-sm text-grey mt-5'>
              Exclusive: Amazon Studios has acquired Victoria Woodhull, with Oscar winning Room star Brie Larson polsed
              to produce, and play the first female candidate for the presidency of the United States. Amazon bought it
              in a pitch package deal. Ben Kopit, who wrote the Warner Bros film Libertine that has...
            </p>
          </div>

          <div className='mt-10 lg:mt-0'>
            <div className='flex justify-between mb-6'>
              <h3 className='text-white font-bold text-lg '>More news on Blockbuster</h3>
              <ViewAll text='See all Movies news' link='/news' />
            </div>
            {news.map((item) => {
              return (
                <div key={item.text} className='flex flex-col mb-7 pr-4'>
                  <h6 className='text-blue text-sm font-bold mb-1 lg:hover:text-[purple] dark:lg:hover:text-yellow ease-out duration-300 cursor-pointer'>
                    <Link to={''}>{item.text}</Link>
                  </h6>
                  <span className='text-grey text-xs'>{item.data}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
