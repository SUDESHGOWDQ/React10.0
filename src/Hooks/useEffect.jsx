import React, { useEffect, useState } from 'react'

const App = () => {
	const[count,setCount] = useState(0)
	const[name,setName] = useState("")

	useEffect(()=>{
		document.title = `${count}`
		let btn = document.getElementById('dark')
		btn.addEventListener('click',()=>{
			document.body.style.backgroundColor = 'black'
			document.body.style.color = 'white'
		})

	},)

	function handleClick() {
		setCount(count + 1)
	}

  return (
	<div>
	<h1>{count}</h1>
	<input onChange={(e)=>setName(e.target.value)} />
	<h1>My name is {name}</h1>
	<button onClick={handleClick}>Increment</button>
	<button id='dark'>Dark</button>
	</div>
  )
}

export default App