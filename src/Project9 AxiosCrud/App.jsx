import React,{Suspense,lazy} from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Footer from './Project9 AxiosCrud/Components/Footer'
import Navbar from './Project9 AxiosCrud/Components/Navbar'
import Loader from './Project9 AxiosCrud/Components/UI/Loader'
import { PaginationProvider } from './Project9 AxiosCrud/Context/PaginationContext'
import './App.css'

const App = () => {
	const Home = lazy(() => import('./Project9 AxiosCrud/Pages/Home'));
	const Create = lazy(() => import('./Project9 AxiosCrud/Pages/Create'));
	const Edit = lazy(() => import('./Project9 AxiosCrud/Pages/Edit'));
  return (
	<div className='App'>
	<BrowserRouter>
	<PaginationProvider>
	<Navbar/>
	<Routes>
		<Route path='/' element={
          <Suspense fallback={
			<div className='Loader-App'><Loader/></div>
		  }><Home/></Suspense>
		}/>
		<Route path='/create' element={
		<Suspense fallback={
			<div className='Loader-App'><Loader/></div>
		}><Create/></Suspense>
		}/>
		<Route path='/edit/:id' element={
		<Suspense fallback={
			<div className='Loader-App'><Loader/></div>
		}><Edit/></Suspense>
		}/>
	</Routes>
	<Footer/>
	</PaginationProvider>
	</BrowserRouter>
	</div>
  )
}

export default App