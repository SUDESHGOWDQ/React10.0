import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Router/Home'
import Contact from './Router/Contact'
import Service from './Router/Service'
import Navbar from './Router/Navbar'

const App = () => {
  return (
	<div>
	<BrowserRouter>
	 <Navbar/>
	 <Routes>
	 <Route path='/' element={<Home/>}/>
	 <Route path='/contact' element={<Contact/>}/>
	 <Route path='/service' element={<Service/>}/>
	 <Route path='*' element={<h1>404 Error</h1>}/>
	 </Routes>
	</BrowserRouter>
	</div>
  )
}

export default App