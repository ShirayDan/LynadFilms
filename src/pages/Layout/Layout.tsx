import { FC } from 'react'

import { Outlet } from 'react-router'
import { Header } from '../../modules/Header'
import { Footer } from '../../modules/Footer'

export const Layout: FC = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
