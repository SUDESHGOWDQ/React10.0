import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Project12 Movie/Pages/Home'
import Header from './Project12 Movie/Pages/Header'
import Movie from './Project12 Movie/Pages/Movie'
import {Request} from './Project12 Movie/Request'
import './App.css'

const App = () => {
  return (
	<div className='App'>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={
					<div className='Wrapper_Row'>
					<Header url={Request.TrendingMovies}/>
					<Home title={'Trending'} url={Request.TrendingMovies}/>
					<Home title={'Upcoming'} url={Request.UpcomingMovies}/>
					<Home title={'Popular'} url={Request.PopularMovies}/>
					<Home title={'Top Rated'} url={Request.TopRatedMovies}/>
					</div>
				}/>
				<Route path='/movie/:id' element={<Movie/>}/>
			</Routes>
		</BrowserRouter>
	</div>
  )
}

export default App