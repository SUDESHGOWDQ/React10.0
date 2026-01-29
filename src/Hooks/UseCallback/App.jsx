import React, { useCallback, useState } from 'react'
import Child from './Child'


const App = () => {
	const[add,setAdd] = useState(0)
	function increment(){
		setAdd(add+1)
	}

	const learning = useCallback(()=>{
		console.log("I am learning React Memo and useCallback");
	},[])

  return (
	<div>
	<Child learning={learning}/>
	<div>Count: {add}</div>
	<button onClick={increment}>Increment</button>
	</div>
  )
}

export default App