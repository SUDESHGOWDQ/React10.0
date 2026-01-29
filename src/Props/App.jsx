import React from 'react'
import Navbar from './Props/Navbar'
import Hero from './Props/Hero'
import Card from './Props/Card'
import Footer from './Props/Footer'

const App = () => {
	
	const userName = "Sudesh Gowda";
	const userAge = 28;

	function DarkMode() {
		document.body.style.backgroundColor = "black";
		document.body.style.color = "white";
	}

  return (
	<div>
	<Navbar dark={DarkMode} />
	<Hero name={userName} age={userAge}/>
	<Card/>
	<Footer/>
	</div>
  )
}

export default App