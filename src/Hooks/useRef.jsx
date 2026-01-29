import React, { useRef } from 'react'

const App = () => {
	const inputRef = useRef()
	function handleClick(){
		console.log(inputRef);
		console.log(inputRef.current);
		inputRef.current.focus()
		console.log(inputRef.current.value);
		
	}
  return (
	<div>
	<input type='text' ref={inputRef}/>
	<button onClick={handleClick}>Search</button>
	</div>
  )
}

export default App