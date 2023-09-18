import { FC, useState } from 'react'

import { UserInfo } from './components/UserInfo'
import { Profile } from './components/Profile'
import { FavoriteMovies } from './components/FavoriteMovies'

export const ProfilePage: FC = () => {
  const [page, setPage] = useState(0)

  return (
    <div className='pt-32 pb-10 bg-main-bg'>
      <div className='container lg:grid grid-cols-[230px_1fr] mx-auto px-3'>
        <UserInfo changePage={setPage} page={page} />

        {page === 0 && <Profile />}
        {page === 1 && <FavoriteMovies />}
      </div>
    </div>
  )
}
