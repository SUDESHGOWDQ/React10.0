import React from 'react'
import Child1 from './Props Drilling/Child1.jsx'

const App = () => {
	const name = "Sudesh Gowda"
  return (
	<div>
		<Child1 name={name} />
	</div>
  )
}

export default App