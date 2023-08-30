import './App.scss'

import { Header } from './modules/Header'
import { Footer } from './modules/Footer'

import { MainPage } from './pages/MainPage'
import { ErrorPage } from './pages/ErrorPage'
import { FilmPage } from './pages/FilmsPage'

function App() {
	return (
		<>
			<Header />
			{/* <MainPage /> */}
			{/* <ErrorPage /> */}
			<FilmPage />
			<Footer />
		</>
	)
}

export default App
