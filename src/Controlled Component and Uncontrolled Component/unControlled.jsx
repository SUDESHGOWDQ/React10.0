import React from 'react'
import { useRef } from 'react'

const App = () => {

	const nameRef = useRef()

	function handleSubmit(){
		console.log(nameRef.current.value);	
	}

	console.log("can u see me ");
	

  return (
	<div>
	<input ref={nameRef} />
	<button onClick={handleSubmit}>Submit</button>
	</div>
  )
}

export default App