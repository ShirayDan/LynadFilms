import './App.scss'

import { Header } from './modules/Header'
import { Footer } from './modules/Footer'

import { MainPage } from './pages/MainPage'
import { ErrorPage } from './pages/ErrorPage'
import { FilmPage } from './pages/FilmsPage'
import { SingleFilm } from './pages/SingleFilm'
import { StarPage } from './pages/StarPage'

function App() {
	return (
		<>
			<Header />
			{/* <MainPage /> */}
			{/* <ErrorPage /> */}
			{/* <FilmPage /> */}
			{/* <SingleFilm /> */}
			<StarPage />
			<Footer />
		</>
	)
}

export default App
