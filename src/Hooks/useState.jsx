import React,{useState} from 'react'

const App = () => {
	const [state, setState] = useState(0);

	function increment(){
		setState((prevState)=>prevState+1)
	}

	function decrement(){
		setState((prevState)=>prevState-1)
	}

  return (
	<div>
	<h1>{state}</h1>
	<button onClick={increment}>Increment</button>
	<button onClick={decrement}>Decrement</button>
	</div>
  )
}

export default App