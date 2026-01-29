import React, { useMemo, useState } from 'react'

const App = () => {

	const[add,setAdd] = useState(0)
	const[sub,setSub] = useState(0)

	function handleAdd(){
		setAdd(add+1)
	}

	function handleSub(){
		setSub(sub-1)
	}

	const mul = useMemo(()=>{
		console.log("Can u see me")
		return add *2
	},[add])

  return (
	<div>
	<h1>Counter App</h1>
	<h2>Addition: {add}</h2>
	<h2>Subtraction: {sub}</h2>
	<h3>Multiplication:{mul}</h3>
	<button onClick={handleAdd}>Add</button>
	<button onClick={handleSub}>Subtract</button>
	</div>
  )
}

export default App