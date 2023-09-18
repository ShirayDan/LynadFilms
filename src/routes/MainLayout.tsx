import { FC, useEffect } from 'react'
import { useAppSelector } from '../redux/hook'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { ErrorPage } from '../pages/ErrorPage'
import { Layout } from '../pages/Layout'
import { FilmPage } from '../pages/FilmsPage'
import { MainPage } from '../pages/MainPage'
import { SingleFilm } from '../pages/SingleFilm'
import { SingleStar } from '../pages/SingleStar'
import { StarPage } from '../pages/StarPage'
import { NewsPage } from '../pages/NewsPage'
import { SingleNews } from '../pages/SingleNews'
import { ScrollToTop } from '../components/ScrollToTop'
import { ProfilePage } from '../pages/ProfilePage'

export const MainLayout: FC = () => {
  const theme = useAppSelector((store) => store.theme)
  const element = document.documentElement

  const darkQuery = window.matchMedia('(prefers-color-scheme: dark)')

  function onWindowMatch() {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && darkQuery.matches)) {
      element.classList.add('dark')
    } else {
      element.classList.remove('dark')
    }
  }

  onWindowMatch()

  useEffect(() => {
    switch (theme.theme) {
      case 'dark':
        element.classList.add('dark')
        localStorage.setItem('theme', 'dark')
        break
      case 'light':
        element.classList.remove('dark')
        localStorage.setItem('theme', 'light')
        break
      default:
        localStorage.removeItem('theme')
        onWindowMatch()
        break
    }
  }, [theme])

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path='stars' element={<StarPage />} />
          <Route path='stars/:id' element={<SingleStar />} />
          <Route path='films' element={<FilmPage />} />
          <Route path='films/:id' element={<SingleFilm />} />
          <Route path='news' element={<NewsPage />} />
          <Route path='news/:id' element={<SingleNews />} />
          <Route path='profile/:id' element={<ProfilePage />} />

          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
