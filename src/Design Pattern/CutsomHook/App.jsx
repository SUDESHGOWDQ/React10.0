import React from 'react'
import Child from './Child'
import useModel from './Design Pattern/CutsomHook/useModel'

const App = () => {

	const{open,handleOpen,handleClose} = useModel()

  return (
	<div>
	<h1>App</h1>
	<button onClick={handleOpen}>Open</button>
	{
		open  && <div>
		Hii This message from App Component
		<button onClick={handleClose}>Close</button>
		</div>
	}
	<Child />
	</div>
  )
}

export default App