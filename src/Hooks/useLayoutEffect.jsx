import React, { useLayoutEffect,useState,useRef } from 'react'
import './App.css'

const App = () => {
	const box = useRef()
	const [text,setText] = useState("InitialText")

	useLayoutEffect(()=>{
		if (box.current.offsetWidth > 100) {
			setText("UpdatedText")
		}
	},[])


  return (
	<div ref={box} style={{width:'200px', border:'1px solid black'}}>
	{text}
	</div>
  )
}

export default App