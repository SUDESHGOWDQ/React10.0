import React from 'react'

const App = () => {

	const userName = "Sudesh"

	function Dark(){
		document.body.style.background="black"
		document.body.style.color="white"
	}

  return (
	<div>
	
	<button onClick={Dark}>Dark</button>
	<h1>My name is {userName}</h1>

	</div>
  )
}

export default App