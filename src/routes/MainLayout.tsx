import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { ErrorPage } from '../pages/ErrorPage'
import { Layout } from '../pages/Layout'
import { FilmPage } from '../pages/FilmsPage'
import { MainPage } from '../pages/MainPage'
import { SingleFilm } from '../pages/SingleFilm'
import { SingleStar } from '../pages/SingleStar'
import { StarPage } from '../pages/StarPage'

export const MainLayout: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path='stars' element={<StarPage />} />
          <Route path='stars/:id' element={<SingleStar />} />
          <Route path='films' element={<FilmPage />} />
          <Route path='films/:id' element={<SingleFilm />} />

          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
