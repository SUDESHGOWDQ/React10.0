import React, { useContext } from 'react'
import {Data} from '../../App'

const Child3 = () => {
	const {name,age,DarkMode} = useContext(Data)
  return (
	<div>
	<h1>My name is {name} and my age is {age} </h1>
	<button onClick={DarkMode}>DarkMode</button>
	</div>
  )
}

export default Child3